const { Schema, model } = require("mongoose");
const reactionSchema = require('./reaction');


const thoughtSchema = new Schema(
  {
    thoughtText: {
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
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters:true
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  if (this.reactions === undefined) return 0;
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
