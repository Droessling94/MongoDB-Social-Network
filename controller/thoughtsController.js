
const { Thought } = require('../models/Thoughts')

module.exports = {
    getThoughts(req,res) {
        try {
            Thought.find()
            .then((thoughts) => res.json(thoughts))
        }
        catch (error){
            console.log(error);
            throw error;
        }
    },
    getSingleThought(req,res) {
        try {
            Thought.findOne({_id: req.params._id})
            .then((user) => res.json(user))
        }
        catch (error){
            console.log(error);
            throw error;
        }
    },
    createThought(req, res) {
        try {
            User.create(req.body)
            .then((user) => res.json(user))
        }
        catch (error){
            console.log(error);
            throw error;
        }
      },
      updateThought(req,res){
          try{
            User.findOneAndUpdate({_id: req.params.id},{ $set: req.body})
            .then((user) => res.json(user))
          }catch(error){
              console.log(error);
              throw error;
          }
      },
      deleteThought(req,res){
        try{
          User.findOneAndDelete({_id: req.params.id})
          .then((user) => res.json(user))
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}