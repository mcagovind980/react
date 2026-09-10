const express = require("express");

const {
  registerUser,
  loginUser
} = require("../controllers/userController.js");

const router = express.Router();

// User Register
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

module.exports = router;