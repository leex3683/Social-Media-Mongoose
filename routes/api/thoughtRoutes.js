const router = require("express").Router();
const {
  getThoughts,
  createThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
} = require("../../controllers/Controller");

// /api/thought
router.route('/').get(getThoughts).post(createThoughts);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


module.exports = router;