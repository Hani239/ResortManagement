// import mongoose from "mongoose";
const mongoose= require("mongoose");
const { isEmail } = require('validator');

const adminModel = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phone:String,
    address: String,
    // city:String
});

export const adminSchema = mongoose.models.admins
|| mongoose.model("admins", adminModel);