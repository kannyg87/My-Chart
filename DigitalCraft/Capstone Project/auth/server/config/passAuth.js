const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const db = require('../models'); 
const config = require('../secrets'); 
let options = {
    usernameField: 'email'
}

let localLogin = new LocalStrategy(options, async (email, password, done)=>{
    
    try{
    // check to see if email is in our db 
        let records = await db.user.findAll({where: {email: email}}); 
        console.log(records);
        if(records !== null){
         //encrypt password and compare to password in db 
            bcrypt.compare(password, records[0].password, (err, isMatch)=>{
//check if err object exists
                if(err){
                    return done(err);
                }
                
                if(!isMatch) {
                    return done(null, false)
                }

                //valid user 
                return done(null, records[0]);
            }) 

        }
        else{
            
            //no email was found, exit with error
            return done(null, false);
        }
    }
    catch(error){
        return done(error)
    }

});


let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}
let jwtLogin = new JwtStrategy(jwtOptions, async (payload, done)=>{

    try{
        let user = await db.user.findByPk(payload.sub);
        if(user){
            //success
            done(null, user);
        }
        else {
            //didn't find the user 
            done(null, false)
        }
    }
    catch(error){
        return done(error)
    }

});


passport.use(localLogin);
passport.use(jwtLogin)