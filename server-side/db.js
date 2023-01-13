const mongoose = require("mongoose");
require("dotenv").config({ path: "./app.env" });

module.exports = async () => {
  try {
    const DB = process.env.MONGODB_URI.replace(
      "<PASSWORD>",
      process.env.DB_PASSWORD
    );
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB server connected");
  } catch (error) {
    console.log(error);
  }
};
