const router = require("express").Router();
const {
  getUsers,
  createUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/Controller");

// /api/user
router.route('/').get(getUsers).post(createUsers);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;