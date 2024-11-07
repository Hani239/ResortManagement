// import mongoose from "mongoose";
const mongoose= require("mongoose");
const { isEmail } = require('validator');

const userModel = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phone:String,
    address: String,
    city:String
});

export const userSchema = mongoose.models.users
|| mongoose.model("users", userModel);