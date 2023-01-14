const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
