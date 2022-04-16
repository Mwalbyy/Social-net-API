const { Schema, Types, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: String,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      // get: function (time) {
      //   formatTimeStamp(time);
      // },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reaction = reactionSchema

module.exports = Reaction;
