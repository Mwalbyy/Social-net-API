const { Schema, model } = require("mongoose");
const thoughtSchema = require("./thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    //   TODO: email validation
      email: true,
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// friend count virtual
userSchema.virtual('friendCount').get(function () {
    return this.friends.length
})