const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
   review use movie as reference
   * */
const directorSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address : {
        type : String,
    }
});
module.exports = mongoose.model('Reviews', directorSchema);