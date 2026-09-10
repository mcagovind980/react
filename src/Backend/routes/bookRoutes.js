// import express from "express";

// import {
//   getBooks,
//   getBook,
//   createBook,
//   updateBook,
//   deleteBook
// } from "../controllers/bookController.js";

// const router = express.Router();


// // GET all
// router.get("/", getBooks);

// // GET one
// router.get("/:id", getBook);

// // POST
// router.post("/", createBook);

// // PUT
// router.put("/:id", updateBook);

// // DELETE
// router.delete("/:id", deleteBook);


// export default router;




// import express from "express";
// import {
//   getBooks,
//   getBook,
//   createBook,
//   updateBook,
//   deleteBook
// } from "../controllers/bookController.js";

// const router = express.Router();

// router.get("/", getBooks);
// router.get("/:id", getBook);
// router.post("/", createBook);
// router.put("/:id", updateBook);
// router.delete("/:id", deleteBook);

// export default router;




// const express = require("express");

// const {
//   getBooks,
//   getBook,
//   createBook,
//   updateBook,
//   deleteBook
// } = require("../controllers/bookController.js");

// const router = express.Router();

// router.get("/", getBooks);
// router.get("/:id", getBook);
// router.post("/", createBook);
// router.put("/:id", updateBook);
// router.delete("/:id", deleteBook);

// module.exports = router;





const express = require("express");

const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
} = require("../controllers/bookController.js");

const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

// Public
router.get("/", getBooks);
router.get("/:id", getBook);

// Admin only
router.post("/", protect, createBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;