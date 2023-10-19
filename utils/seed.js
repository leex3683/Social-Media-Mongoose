const connection = require("../config/connection");
const { User, Reaction, Thought } = require("../models");
const {
  getRandomName,
  getRandomThoughts,
  getRandomReactions,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
    console.log("names dropped-----------------")
  }

  let reactionCheck = await connection.db
  .listCollections({ name: "reactions" })
  .toArray();
if (reactionCheck.length) {
  await connection.dropCollection("reactions");
  console.log("reactions dropped-----------------")
}
  // let studentsCheck = await connection.db.listCollections({ name: 'students' }).toArray();
  // if (studentsCheck.length) {
  //   await connection.dropCollection('students');
  // }

  // Create empty array to hold the students
  const users = [];


  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    // const thoughts = getRandomThoughts(20);
    // const reactions = getRandomReactions(20);
    const name = getRandomName();

    users.push({
      name,
    //   thoughts,
    // reactions,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
