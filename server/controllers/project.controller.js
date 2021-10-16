const Project = require("../models/project.model")

module.exports.index = (req, res)=>{
    res.json({
        message: "safely connected to the back-end"
    })
}

module.exports.createOne =(req, res)=>{
    console.log(req.body)
    Project.create(req.body)
    .then(newItem => res.json(newItem))
    .catch( err => res.status(400).json(err))
}


module.exports.getAll = (req,res)=>{
    // Project.find({}).sort({type:'desc'}).exec()
    Project.find({}).collation({locale:'en', strength:2}).sort({type:1})
    .then(allItems => res.json(allItems))
    .catch(err => res.status(400).json(err))
}

module.exports.getOne = (req,res)=>{
    console.log("findOne",req.params.id)
    Project.findOne({_id:req.params.id})
    .then( foundItem => res.json(foundItem))
    .catch(err=> res.status(400).json(err))
}

module.exports.updateOne = (req,res)=>{
    Project.findOneAndUpdate({_id:req.params.id}, req.body, {new:true , runValidators:true})
    .then( updatedItem => res.json(updatedItem))
    .catch( err => res.status(400).json(err))
}

module.exports.deleteOne = (req, res)=>{
    
    console.log("deleteOne",req.params.id)
    Project.deleteOne({_id: req.params.id})
    .then( result => res.json(result))
    
}


// module.exports.addLike = (req,res)=>{
//     Project.findOneAndUpdate({_id:req.params.id}, req.body, {new:true , runValidators:true})
//     .then( updatedItem => res.json(updatedItem))
//     .catch( err => res.status(400).json(err))
// }