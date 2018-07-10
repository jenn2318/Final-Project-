 const mongoose = require("mongoose");
const parkingSchema = mongoose.Schema;
//
 const parkingSchema =  new Schema({
//   title: { type: String, required: true },
     name: {
    type: String,
        required: true
     },

     address:{
    type: String,
         required: true
     },


     phone:{
     type: String,
         required: true}

//   location: { type: String, required: true },
//   rating: { type: String },
//   price: { type: String },
//   businessHours: { type: String },
//   eventPricing: { type: String },
//   zipCode: { type: String },
//
//
 });
//
 const lastCall = mongoose.model("Parking", parkingSchema);
//
 module.exports = Parking;
