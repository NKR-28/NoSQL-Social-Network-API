const { current } = require("immer");
const { Schema, model } = require("mongoose");

// Schema to create a thought model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    max_length: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //the user that created this thought
  username: {
    type: String,
    required: true,
  },
  // these are like replies
  reactions: {},
  //     students: [
  //       {
  //         type: Schema.Types.ObjectId,
  //         ref: "Student",
  //       },
  //     ],
  //   },
  //   {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
