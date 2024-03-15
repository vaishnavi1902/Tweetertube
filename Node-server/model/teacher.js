// import mongoose, { model } from 'mongoose'
const mongoose = require('mongoose');

const { Schema } = mongoose

const teacherSchema = new Schema({
    fname: String,
    mname: String,
    lname: String,
    adhar: {
        type: Number,
        unique: true
    },
    mobile: Number,
    email: String,
    age: Number,
    gender: String,
    // certificate: String,
    proefficiency: Number,
    password: String,
})
const TeacherModel = mongoose.model('teacher', teacherSchema);
module.exports = TeacherModel;

