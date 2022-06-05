const { Schema, model } = require('mongoose');
const Thought = require('./Thoughts'); // update to thoughts models when thoughts is made
const Friend = require('./Friends'); // update to friend models when thoughts is made

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

const User = new model('user', userSchema);

module.exports = {User};
