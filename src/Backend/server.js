const express = require("express");
require("dotenv").config();
const cors = require("cors");

const userRoutes = require("./routes/userRoutes.js");
const bookRoutes = require("./routes/bookRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const connectDB = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ebookwebclonereact.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ebook Backend is Running!");
});

app.use("/api/books", bookRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});