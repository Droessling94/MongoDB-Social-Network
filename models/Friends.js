const { Schema, model } = require('mongoose');

// Schema to create Student model
const friendSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
        type: String,
        required: true,
        max_length: 50,
      },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Friend = model('friend', friendSchema);

module.exports = Friend;
