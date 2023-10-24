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
  console.log("connected");
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

  await Thought.collection.insertMany([
    {
      _id: "HRmn0As5R56dsSDFe86121f1ey1S1", 
      thoughtText: "my first thought",
      username: "Michael",
    },
    {
      _id: "HRmn0As5R56dsSDFe86121f1ey1S2", 
      thoughtText: "my second thought",
      username: "Michael",
    },
    {
      _id: "HRmn0As5R56dsSDFe86121f1ey1S3", 
      thoughtText: "my 3rd thought",
      username: "Michael",
    },
    {
      _id: "HRmn0As5R56dsSDFe86121f1ey1S4", 
      thoughtText: "my 4th thought",
      username: "Yee",
    },
  ]);

const michaelObjectId = new ObjectId();
const yeeObjectId = new ObjectId();
const linhObjectId = new ObjectId();
const jimObjectId = new ObjectId();

console.log(JSON.stringify(michaelObjectId))

  await User.collection.insertMany([
    {
      _id: michaelObjectId,
      username: "Michael",
      email: "Michael@gmail.com",
      thoughts: ["HRmn0As5R56dsSDFe86121f1ey1S1","HRmn0As5R56dsSDFe86121f1ey1S2"],
      friends: [yeeObjectId,linhObjectId],
    },
    {
      _id: `65308ada461f580c1ee8c473`,
      username: "Linh",
      email: "Linh@gmail.com",
      thoughts: ["HRmn0As5R56dsSDFe86121f1ey1S5"],
      friends: [michaelObjectId, yeeObjectId],
    },
    {
      _id: yeeObjectId,
      username: "Yee",
      email: "Yee@gmail.com",
      thoughts: ["HRmn0As5R56dsSDFe86121f1ey1S4"],
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
