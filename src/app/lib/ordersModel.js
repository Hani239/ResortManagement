// import mongoose from "mongoose";
const mongoose= require("mongoose");

const orderModel = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    room_id:String,
    status:String,
    amount:String,
    fname:String,
    lname:String,
    num_adult:String,
    num_child:String,
    country:String,
    address:String,
    city:String,
    postcode:String,
    phone:String,
    email:String,
    order_note:String,
});

export const orderSchema = mongoose.models.orders
|| mongoose.model("orders", orderModel);