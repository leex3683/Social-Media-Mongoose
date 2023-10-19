const {Reaction, Thought, User } = require('../models');

module.exports = {

    //get all thoughts
async getThoughts(req,res) {
try {
    const thoughts = await Thought.find();
    res.json(thoughts)
} catch (err) {
    res.status(500).json(err);
}

},

//get all Reactions
async getReactions(req,res) {
    try {
        const reactions = await Reaction.find();
        res.json(reactions)
    } catch (err) {
        res.status(500).json(err);
    }
    
    },

//get all Users
async getUsers(req,res) {
    try {
        const Users = await User.find();
        res.json(Users)
    } catch (err) {
        res.status(500).json(err);
    }
    
    },
}