const { Schema, model } = require("mongoose");
const assignmentSchema = require("./Assignment");

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends: [friendsSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual
postSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
