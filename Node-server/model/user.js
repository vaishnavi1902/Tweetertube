// import mongoose, { model } from 'mongoose'
const mongoose = require('mongoose');

const { Schema } = mongoose
const userSchema = new Schema({
    fname : String ,
    mname : String, 
    lname : String,
    adhar : {
            type: Number,
            unique: true
        },
    age : Number , 
    gender : String ,
    ayear : Number ,
    // name: String,
    // email: {
    //     type: String,
    //     unique: true
    // },
    password: String
})
const UserModel = mongoose.model('student', userSchema);

module.exports = UserModel;