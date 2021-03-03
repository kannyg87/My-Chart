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

router.post('/signin', requireSignin,(req,res) => {
    res.json({token: token(req.user)})
})

router.post('/signup', async (req,res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let adress = req.body.adress;
    let password = bcrypt.hashSync(req.body.password, 8);
    let confirmPassword = bcrypt.hashSync(req.body.confirmPassword, 8);
    try{
    let records = await db.user.findAll({where:{email:email}});
        if (records.length ===0){
            let user = await db.user.create({firstName: firstName, lastName: lastName, email: email, adress: adress, password:password, confirmPassword: confirmPassword})
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
