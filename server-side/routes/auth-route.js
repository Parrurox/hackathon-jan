const router = require("express").Router();
//const { Magic } = require("@magic-sdk/admin");
const User = require("../models/userModel");
//const authMiddleware = require("../middlewares/auth.middleware.js");
require("dotenv").config();

//const magic = new Magic(process.env.MAGIC_SECRET_KEY);

//register user
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      return res.status(400).send("User already exists");
    }
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      university: req.body.university,
      password: req.body.password,
      stream: req.body.stream,
      year: req.body.year,
    });
    await newUser.save();
    return res.status(201).send("User created successfully");
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

// check if user email exists in database
router.post("/check", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(200).json({
        status: false,
      });
    }
    return res.status(200).json({
      status: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await User.findOne({
      email: email,
    });
    if (useremail.password === password) {
      return res.status(201).send("Logged in!!");
    } else {
      return res.status(400).send("Wrong password");
    }
  } catch (error) {
    res.status(400).send("Invalid email");
  }
});

module.exports = router;
