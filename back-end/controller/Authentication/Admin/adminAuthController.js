const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY
const SALT = process.env.SALT
const jwt = require('jsonwebtoken');
const wrapAsync = require("../../../utils/WrapAsync");
const Users = require("../../../model/Users")

module.exports.RegisterNewAdmin = wrapAsync(async function(req, res){
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

    const newUser = new Users({...new_data, password:hashedPassword , isAdmin:true });
    await newUser.save();

    return res.json({
        msg:"Admin Account Created Successfully"
    }).status(200)
});




module.exports.resetPassword = wrapAsync(async function(req, res){

})

module.exports.changeForgetPassword = wrapAsync(async function(req, res){

})

module.exports.ChangePassword = wrapAsync(async function(req,res){

})