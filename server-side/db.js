const mongoose = require("mongoose");
require("dotenv").config({ path: "./app.env" });

module.exports = async () => {
  try {
    const DB = process.env.MONGODB_URI;
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb connected");
  } catch (error) {
    console.log(error);
  }
};
