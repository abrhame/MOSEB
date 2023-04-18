const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY
const SALT = process.env.SALT
const jwt = require('jsonwebtoken');
const wrapAsync = require("../../../utils/WrapAsync");
const Users = require("../../../model/Users")

module.exports.CreateNewUserAccount = wrapAsync(async function(req,res){
    const data = req.body; 

    const new_data = {
        name:data.name,
        email:data.email,
        phone:data.phone,
        username:data.username, 
    }

    if(data.password != data.confirPassword){
        return res.json({
            msg:"Passwords Must Match"
        }).status(401)
    }

    const hashedPassword = bcrypt.hash(data.password, SALT);

    const newUser = new Users({...new_data, password:hashedPassword });
    await newUser.save();

    return res.json({
        msg:"User Account Created Successfully"
    }).status(200)

    
})


module.exports.LoginUser = wrapAsync(async function(req,res){
    const data = req.body;
    const user = await Users.findOne(String(data.username));
    if(!user){
        return res.json({
            msg:"Incorrect Username or Password"
        }).status(401)
    }

    const confirmPassword = bcrypt.compare(data.password, user.password);

    if(!confirmPassword){
        return res.json({
            msg:"Incorrect Username or Password"
        }).status(401)
    }

    const token = jwt.sign({id:user.id, role:user.isAdmin} , SECRET_KEY, {expiresIn:"24h"});

    return res.json({
        msg:"Logged In Successfully", 
        token: token
    }).status(200)

})

module.exports.VertifyUserToken = wrapAsync(async function(req,res){
    const token = req.get("Authorization");
    const validToken = jwt.verify(token, SECRET_KEY);

    if(!validToken){
        return res.json({
            msg:"Invalid token", 
            payload:{}
        }).status(402)
    }

    return res.json({
        msg:"Valid Token",
        paylaod:{
            isAdmin:validToken.isAdmin
        }
    })
})