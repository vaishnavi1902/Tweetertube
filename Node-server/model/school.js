// import mongoose, { model } from 'mongoose'
const mongoose = require('mongoose');

const { Schema } = mongoose

const SchoolSchema = new Schema({
    sname: String,
    branch: String,
    addres: String,
    pincode: Number,
    mobile: Number,
    email: {
        type: String,
        unique: true
    },
    state: String,
    password: String,
})
const SchoolModel = mongoose.model('school', SchoolSchema);
module.exports = SchoolModel;

