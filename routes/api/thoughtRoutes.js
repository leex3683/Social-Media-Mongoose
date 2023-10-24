const router = require("express").Router();
const {
  getThoughts,
  createThoughts,
} = require("../../controllers/Controller");

// /api/user
router.route('/').get(getThoughts).post(createThoughts);

module.exports = router;