const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const emailsSchema =  new Schema({

    email: {
        type: String,
        required: true
    },

    multipleSelect:{
        type: String,
        required: true
    },

    comment:{
        type: String,
        required: true
    },


});
//
const emails = mongoose.model("emails", emailsSchema);
//

module.exports = emails;

