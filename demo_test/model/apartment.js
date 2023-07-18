const mongoose = require('mongoose');
 

// Declare the Schema of the Mongo model
var apartmentSchema = new mongoose.Schema({
    
    owner:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true,
    },
    rooms:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    rent:{
        type:String,
        required:true
    },
    security:{
        type:String,
        required:true
    },
    interested:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    }
});

//Export the model
module.exports = mongoose.model('Apartment', apartmentSchema);

