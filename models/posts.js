const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    about:{
        type: String,
        required:true
    },
    job:{
        type: String,
        required:true
    },
    university:{
        type: String,
        required:true,
    }
});

module.exports = mongoose.model('Posts',postSchema);