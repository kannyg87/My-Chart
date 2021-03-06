const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(require('./routes/authentications'));

app.listen(3001, ()=>{
    console.log(`listening on posrt 3001`)
})



// const jwt = require('jwt-simple');
// let userInfo ={
//     id:'12345',
//     userName:'kanny',
//     email: 'kanny@kanny.com'
// }
// const token = (user) => {
//     let  timestamp = new Date().getTime();
//     return jwt.encode({sub: user.id, name:user.userName, iat:timestamp},"hghgjkgjkgkkj")
// }
// let jwtToken = token(userInfo);
// console.log(jwtToken)

