const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Invalid age!");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("Invalid password!");
//       }
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Invalid email");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "   szeszej   ",
//   email: "szeSZej@szeszej.com",
//   password: "password",
// });

// me.save()
//   .then((result) => console.log(result))
//   .catch((error) => console.log("Error", error.errors));

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const learningNode = new Task({
  description: "  Prezka na konfe    ",
});

learningNode
  .save()
  .then((result) => console.log(result))
  .catch((result) => console.log(result));
