const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Must have title"],
        minlength: [3, "Must be greater than 3 characters"],
        unique:[true, "The name must be unique"]
        
    },
    type:{type: String,
        required:[true, "Must have a type"],
        minlength:[3,"Must be greater than 3 characters"]
    
    },
    description:{
        type:String,
        required:[true, "Must have title"],
        minlength: [3, "Description must be at least three characters"]


    },
    skill1:{type:String},
    skill2:{type:String},
    skill3:{type:String},
    like:{type:Number}
},{timestamps:true});


ProjectSchema.plugin(uniqueValidator, {message: 'The pet name must be unique'});

module.exports = mongoose.model('Project', ProjectSchema);