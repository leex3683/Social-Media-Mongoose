const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        // match: '/^.{0,280}$/',
    },
    username:    {
        type: String,
        required: true,
      },
    createdAt:   {
          type: Date,
          default: Date.now,
          get: formattedDate => moment(formattedDate).format("MMM DD, YYYY [at] hh:mm a"),
        },

  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


// Initialize our Reaction model
// const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;
