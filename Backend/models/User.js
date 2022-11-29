const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const UserSchema = new mongoose.Schema ({
    Firstname:{
    type:String,
    required:true,
    },
    Lastname:{
    type:String,
    required:true,
    },
    Email:{
    type:String,
    required:true,
    },
    Password:{
    type:String,
    required:true,
    },
    ConfirmPassword:{
    type:String,
    required:true,
    },
    Company:{
    type:String,
    required:true,
    },
    Experiences:{
    type:String,
    required:true,
    },


})

// eslint-disable-next-line no-unused-vars
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;