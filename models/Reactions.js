const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionTitle: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactionBody: {
        type: String,
        required: true,
        max_length: 300,
      },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
