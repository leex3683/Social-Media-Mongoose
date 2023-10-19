const router = require("express").Router();
const {
  getUsers,
  getReactions,
  getThoughts,
} = require("../../controllers/Controller.js");

// /api/users
router.route('/').get(getUsers)

// /api/users/:userId
module.exports = router;