
const  {User} = require('../models/Users')

module.exports = {
    getUsers(req,res) {
            User.find()
            .then((users) => res.json(users))
            .catch((error) => {
                console.log(error);
                throw error;
            })

    },
    getSingleUser(req,res) {
        try {
            User.findOne({userName: req.params.userName})
            .then((user) => res.json(user))
        }
        catch (error){
            console.log(error);
            throw error;
        }
    },
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
      },
      updateUser(req,res){
          try{
            User.findOneAndUpdate({userName: req.params.userName},{ $set: req.body})
            .then((user) => res.json(user))
          }catch(error){
              console.log(error);
              throw error;
          }
      },
      deleteUser(req,res){
        try{
          User.findOneAndDelete({userName: req.params.userName})
          .then((user) => res.json(user))
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}