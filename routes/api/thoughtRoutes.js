const router = require("express").Router();
const {
  getThoughts,
  createThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  getReactions,
  createReaction,
  deleteReaction,
} = require("../../controllers/Controller");

// /api/thought
router.route('/').get(getThoughts).post(createThoughts);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router
  .route('/:thoughtId/reactions')
  .get(getReactions)
  .post(createReaction)
  // .delete(deleteReaction);

module.exports = router;