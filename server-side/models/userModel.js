const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    magicId: {
      type: String,
      default: "",
    },
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
    stream: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    bookmarks: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
module.exports = User;
