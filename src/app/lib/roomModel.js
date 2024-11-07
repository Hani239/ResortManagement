const mongoose = require("mongoose");

const roomModel = new mongoose.Schema({
    roomname: { 
      type: String, 
      required: true, 
      unique: true 
    },
    description: { 
      type: String, 
      required: true
    },
    price: { 
      type: Number, 
      required: true 
    },
    capacity: { 
      type: Number, 
      required: true 
    },
    img_path: { 
      type: String, 
      required: true 
    }
  }, {
    timestamps: true
  });

  export const roomSchema = mongoose.models.rooms
    || mongoose.model("rooms", roomModel);