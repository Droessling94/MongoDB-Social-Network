const router = require('express').Router();
//create variables below in userController.js file
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controller/usersController');

// api/users/
router.route('/').get(getUsers).post(createUser);

// /api/users/:userName
router
  .route('/:userName')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
