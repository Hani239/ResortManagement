import mongoose from "mongoose";

const ResortModel = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

export const resortSchema = mongoose.models.ResortCollection
|| mongoose.model("ResortCollection", ResortModel);