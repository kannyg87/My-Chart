const express = require('express');
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require('passport');

const db = require("../models");
const config = require('../secrets');

let requireAuth = passport.authenticate('jwt', {session: false});

const verifyIfUserIsAdmin = async (token) => {
    const information = jwt.decode(token, config.secret);
    const user = await db.user.findByPk(information.sub);

    if (!user) {
        throw new Error('User does not exist');
    }

    if (user.role !== 'admin') {
        throw new Error('User does not have permission to use this resource');
    }
};

router.get('/users', requireAuth, async (req, res) => {
    //securing the requester is an admin
    await verifyIfUserIsAdmin(req.headers.authorization);

    const records = await db.user.findAll();

    const users = records.map((record) => ({
        id: record.id,
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        role: record.role,
    }));

    res.send({ users });
});

router.delete('/user', requireAuth, async (req, res) => {
    await verifyIfUserIsAdmin(req.headers.authorization);

    const userFound = await db.user.findByPk(req.query.userId);

    if (!userFound) {
        throw new Error('User does not exist');
    }

    await userFound.destroy();
    res.send('Success');
});

module.exports = router;
