const express = require('express');
const router = express.Router();

const bcrypt = require("bcryptjs"); //encrypt passwords
const db = require("../models");
const config = require('../secrets');

router.use(express.urlencoded({ extended: false })); //scrape email and pass from request header
router.use(express.json());

const jwt = require("jwt-simple"); //used to create a jwt
const passport = require('passport');
require('../config/passAuth'); //import all of passport auth stuff


let requireSignin = passport.authenticate('local', {session: false});
let requireAuth = passport.authenticate('jwt', {session: false});

const token = (user) => {
    let timestamp = new Date().getTime();  //current time
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}


router.get('/',requireAuth,(req,res) => {
    res.send("hello world")
});

router.get('/user-from-token', requireAuth, async (req, res) => {
    const information = jwt.decode(req.headers.authorization, config.secret);

    const user = await db.user.findByPk(information.sub);

    if (!user) {
        throw new Error('User does not exist');
    }

    res.send({
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
        },
    });
});

router.post('/signin', requireSignin, async (req,res) => {
    const records = await db.user.findAll({where:{email: req.user.email}});

    if (records.length !== 1) {
        res.json({
            errorMessage: 'Users could not be found',
        });
        return;
    }

    const user = records[0];

    res.json({
        token: token(req.user),
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
        },
    })
})

router.post('/signup', async (req,res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, 8);
    try{
    let records = await db.user.findAll({where:{email:email}});
        if (records.length ===0){
            let user = await db.user.create({
                firstName,
                lastName,
                email,
                password,
                role: 'patient',
            })
            //let user = await db.user.create({ email: email, password: password})
            
            let jwtToken = token(user); //token returns a jwt

            return res.json({token: jwtToken}); //passing a jwt to client
        } else{
            return res.status(422).send ({error:'Email already exisit'})

        }
}catch(error){
    return res.status(423).send({error:`Can't access database`})
}
    
});


module.exports = router;
