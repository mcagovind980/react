// // import express from "express";
// const express=require("express")
// const app = express();
// import cors from "cors";
// const PORT = 5000;

// // JSON request body ko read karne ke liye
// app.use(express.json());


// // ===============================
// // Temporary Book Data
// // ===============================

// let books = [
//   {
//     id: 1,
//     title: "Alone Together",
//     image: "/Images/Alone/71HJ49yivqL.jpg",
//     viewLink: "https://example.com/book1"
//   },
//   {
//     id: 2,
//     title: "Alone with the Alone",
//     image: "/Images/Alone/OIP3.jpg",
//     viewLink: "https://example.com/book2"
//   },
//   {
//     id: 3,
//     title: "Every Man Dies Alone",
//     image: "/Images/Alone/download.jpg",
//     viewLink: "https://example.com/book3"
//   }
// ];


// // ===============================
// // GET → Read All Books
// // ===============================

// app.get("/api/books", (req, res) => {

//   res.json(books);

// });


// // ===============================
// // GET → Read Single Book
// // ===============================

// app.get("/api/books/:id", (req, res) => {

//   const id = parseInt(req.params.id);

//   const book = books.find((book) => book.id === id);

//   if (!book) {

//     return res.status(404).json({
//       message: "Book not found"
//     });

//   }

//   res.json(book);

// });


// // ===============================
// // POST → Create New Book
// // ===============================

// app.post("/api/books", (req, res) => {

//   const { title, image, viewLink } = req.body;

//   if (!title) {

//     return res.status(400).json({
//       message: "Title is required"
//     });

//   }

//   const newBook = {

//     id: books.length > 0
//       ? books[books.length - 1].id + 1
//       : 1,

//     title: title,

//     image: image || "",

//     viewLink: viewLink || ""

//   };

//   books.push(newBook);

//   res.status(201).json({
//     message: "Book created successfully",
//     book: newBook
//   });

// });


// // ===============================
// // PUT → Update Book
// // ===============================

// app.put("/api/books/:id", (req, res) => {

//   const id = parseInt(req.params.id);

//   const book = books.find((book) => book.id === id);

//   if (!book) {

//     return res.status(404).json({
//       message: "Book not found"
//     });

//   }

//   const { title, image, viewLink } = req.body;

//   if (title !== undefined) {
//     book.title = title;
//   }

//   if (image !== undefined) {
//     book.image = image;
//   }

//   if (viewLink !== undefined) {
//     book.viewLink = viewLink;
//   }

//   res.json({
//     message: "Book updated successfully",
//     book: book
//   });

// });


// // ===============================
// // DELETE → Delete Book
// // ===============================

// app.delete("/api/books/:id", (req, res) => {

//   const id = parseInt(req.params.id);

//   const bookIndex = books.findIndex(
//     (book) => book.id === id
//   );

//   if (bookIndex === -1) {

//     return res.status(404).json({
//       message: "Book not found"
//     });

//   }

//   const deletedBook = books.splice(bookIndex, 1);

//   res.json({
//     message: "Book deleted successfully",
//     book: deletedBook[0]
//   });

// });


// // ===============================
// // Start Server
// // ===============================

// app.listen(PORT, () => {

//   console.log(
//     `Server running on http://localhost:${PORT}`
//   );

// });



// import express from "express";?
// import cors from "cors";



// import express from "express";
// import cors from "cors";
// import bookRoutes from "./routes/bookRoutes.js";
// const adminRoutes = require("./routes/adminRoutes.js");

// const express=require("express")
// const cors=require("cors")
// const bookRoutes=require("./routes/bookRoutes.js")
// const app = express();
// const connectDB = require("./config/db.js");

// app.use(express.json());

// app.use("/api/admin", adminRoutes);
// const PORT = 5000;
// connectDB ();
// // CORS
// app.use(cors({
//   origin: "http://localhost:5173"
// }));

// // JSON
// app.use(express.json());

// // Home
// app.get("/", (req, res) => {
//   res.send("Ebook Backend is Running!");
// });

// // Books API
// app.use("/api/books", bookRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




const express = require("express");
const cors = require("cors");

const bookRoutes = require("./routes/bookRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const PORT = 5000;

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
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
  console.log(`Server running on http://localhost:${PORT}`);
});