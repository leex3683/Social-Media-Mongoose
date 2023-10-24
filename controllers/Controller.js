const { ObjectId } = require("mongoose").Types;
const { Thought, User } = require("../models");

module.exports = {
  //get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
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
    const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

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
      console.log("trying");
      const Users = await User.find();
      // console.log(Users);
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
};
