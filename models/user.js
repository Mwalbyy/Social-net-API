const { Schema, model } = require("mongoose");
const thought = require("./thought");

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
    thoughts: [
      
      thought],
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

const User = model('user', userSchema);

module.exports = User;
