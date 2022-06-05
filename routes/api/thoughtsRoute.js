const router = require('express').Router();

//create variables below in userController.js file
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controller/thoughtsController');

// api/thoughts/
router.route('/').get(getThoughts).post(createThought);

// /api/users/:id
router
  .route('/:_id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
