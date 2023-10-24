const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");
const moment = require('moment');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
          },
    createdAt:  {
        type: Date,
        default: Date.now,
        get: formattedDate => moment(formattedDate).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username:   {
        type: String,
        required: true,
      },
    reactions: [reactionSchema],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that returns the number of reactions
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  })

// Initialize our thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
