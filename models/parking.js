 const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema;

//
 const restaurantSchema =  new Schema({
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
         required: true},


        rating: {
         type: String,
            required: true
        },

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
 const lastCall = mongoose.model("Parking", restaurantSchema);
//

 module.exports = lastCall;

