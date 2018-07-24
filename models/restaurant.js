 const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
         required: true
     },

        rating: {
         type: String,
            required: true
        },

 });
//
 const lastCall = mongoose.model("Restaurant", restaurantSchema);
//

 module.exports = lastCall;

