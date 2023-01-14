const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./app.env" });
const conn = require("./db");
const authRoutes = require("./routes/auth-route");
//const userRoutes = require("./routes/user-route");
//const doctorRoutes = require("./routes/doctor-route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api/auth", authRoutes);
//app.use("/api/user", userRoutes);
//app.use("/api/doctor", doctorRoutes);

//default route
app.get("/", (req, res) => {
  res.send("Welcome to the hackathon-jan server v1.0.0!");
});

// Connection to database and starting the express server
conn().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port: " + process.env.PORT);
  });
});
