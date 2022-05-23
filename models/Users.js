const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Assignment'); // update to thoughts models when thoughts is made
const friendSchema = require('./Assignment'); // update to friend models when thoughts is made

// Schema to create Student model
const userSchema = new Schema(
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
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Friend',
        },
      ],
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
