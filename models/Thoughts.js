const { Schema, model } = require('mongoose');


// Schema to create Student model
const thoughtSchema = new Schema(
  {
    body: {
        type: String,
        required: true,
        max_length: 300,
      },
      reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction',
        },
      ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
