const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.js");

const JWT_SECRET = "ebook_secret_key";

// REGISTER
const registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required"
      });
    }

    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      username,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        id: admin._id,
        username: admin.username
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message
    });
  }
};


// LOGIN
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid username or password"
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid username or password"
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username
      },
      JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }
};


module.exports = {
  registerAdmin,
  loginAdmin
};