const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    name:{
        type:String, 
        required:true
    }, 
    email:{
        type:String, 
        required:true,
    }, 
    phone:{
        type:String, 
        required:true
    },
    username:{
        type:String, 
        required:true
    }, 
    password:{
        type:String, 
        required:true
    }, 
    isAdmin:{
        type:Boolean, 
        default : false
    }
})
const Users = model("Users", userSchema);

module.exports = Users;