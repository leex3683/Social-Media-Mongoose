const { ObjectId } = require("mongoose").Types;
const { Thought, User, Reaction } = require("../models");

module.exports = {
  //get all thoughts
  async getThoughts(req, res) {
    try {
      console.log("getting thoughts...");
      const thoughts = await Thought.find();
      console.log("thoughts found...");
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //create a thought
  async createThoughts(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        res.status(404).json({ message: "No thought with that ID" });
      }
      res.json({ message: "thought deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get all Users
  async getUsers(req, res) {
    try {
      const Users = await User.find();

      res.json(Users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUsers(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: "No user with this id!" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: "No user with that ID" });
      }
      //cascade delete... This doesn't work, because userId is not in thought model. Keep this code for future development.
      await User.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "user deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get single thought's reactions
  async getReactions(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought.reactions);
    } catch (err) {
      res.status(500).json(err);
    }
  },

 //create a reaction to a thought
 async createReaction(req, res) {
  try {
    const newReaction = await Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$addToSet: {reactions: { reactionBody: req.body.reactionBody, username: req.body.username}}},
      { runValidators: true, new: true }
    );
    res.json(newReaction);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
},

  // Delete a reaction
  async deleteReaction(req, res) {
    try {
      const newReaction = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: { reactionId:req.params.reactionId}}},
        { runValidators: true, new: true }
      );
      res.json(newReaction);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },



   //add a friend to a user
 async addFriend(req, res) {
  try {
    const newFriend = await User.findOneAndUpdate(
      {_id: req.params.userId},
      {$addToSet: {friends: req.params.friendId}},
      { runValidators: true, new: true }
    );
    res.json(newFriend);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
},

  // Delete a reaction
  async deleteFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        {_id: req.params.userId},
        {$pull: {friends: req.params.friendId}},
        { runValidators: true, new: true }
      );
      res.json(newFriend);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },



};
