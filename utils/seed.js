const connection = require("../config/connection");
const { User, Reaction, Thought } = require("../models");
const { ObjectId } = require('mongodb');
// const {
//   getRandomName,
//   getRandomThoughts,
//   getRandomReactions,
// } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // Delete the collections if they exist
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
    console.log("names dropped-----------------");
  }

  // Delete the collections if they exist
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
    console.log("thoughts dropped-----------------");
  }

//Reaction Id objects
const reactionObjectId1 = new ObjectId()
const reactionObjectId2 = new ObjectId()

//Thought Id objects
const thoughtOneObjectId = new ObjectId();
const thoughtTwoObjectId = new ObjectId();
const thoughtThreeObjectId = new ObjectId();
const thoughtFourObjectId = new ObjectId();

  await Thought.collection.insertMany([
    {
      _id: thoughtOneObjectId, 
      thoughtText: "my first thought",
      username: "Michael",
      reactions: [
        {
          reactionId:reactionObjectId1,
          reactionBody:"wow",
          username:"Yee",
        },
        {
          reactionId:reactionObjectId2,
          reactionBody:"yikes",
          username:"Linh",
        }
      ]
    },
    {
      _id: thoughtTwoObjectId, 
      thoughtText: "my second thought",
      username: "Michael",
    },
    {
      _id: thoughtThreeObjectId, 
      thoughtText: "my 3rd thought",
      username: "Michael",
    },
    {
      _id: thoughtFourObjectId, 
      thoughtText: "my 4th thought",
      username: "Yee",
    },
  ]);

const michaelObjectId = new ObjectId();
const yeeObjectId = new ObjectId();
const linhObjectId = new ObjectId();
const jimObjectId = new ObjectId();

  await User.collection.insertMany([
    {
      _id: michaelObjectId,
      username: "Michael",
      email: "Michael@gmail.com",
      thoughts: [thoughtOneObjectId,thoughtTwoObjectId],
      friends: [yeeObjectId,linhObjectId],
    },
    {
      _id: `65308ada461f580c1ee8c473`,
      username: "Linh",
      email: "Linh@gmail.com",
      thoughts: [thoughtThreeObjectId],
      friends: [michaelObjectId, yeeObjectId],
    },
    {
      _id: yeeObjectId,
      username: "Yee",
      email: "Yee@gmail.com",
      thoughts: [thoughtFourObjectId],
      friends: [michaelObjectId, linhObjectId],
    },
    {
      _id: jimObjectId, 
      username: "Jim",
      email: "Jim@gmail.com",
      thoughts: [],
      friends: [michaelObjectId],
    },
  ]);

  // Log out the seed data to indicate what should appear in the database

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
