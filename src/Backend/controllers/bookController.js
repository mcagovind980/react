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
//   }
// ];


// // GET all books
// export const getBooks = (req, res) => {
//   res.json(books);
// };


// // GET single book
// export const getBook = (req, res) => {

//   const id = parseInt(req.params.id);

//   const book = books.find((book) => book.id === id);

//   if (!book) {
//     return res.status(404).json({
//       message: "Book not found"
//     });
//   }

//   res.json(book);
// };


// // POST create book
// export const createBook = (req, res) => {

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

//     title,
//     image: image || "",
//     viewLink: viewLink || ""
//   };

//   books.push(newBook);

//   res.status(201).json({
//     message: "Book created successfully",
//     book: newBook
//   });
// };


// // PUT update book
// export const updateBook = (req, res) => {

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
//     book
//   });
// };


// // DELETE book
// export const deleteBook = (req, res) => {

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
// };




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
//   }
// ];


// const books = require("../../Data/Alone1.js");

// const getBooks = (req, res) => {
//   res.json(books);
// };

// const getBook = (req, res) => {
//   const id = parseInt(req.params.id);

//   const book = books.find((book) => book.id === id);

//   if (!book) {
//     return res.status(404).json({
//       message: "Book not found"
//     });
//   }

//   res.json(book);
// };

// const createBook = (req, res) => {
//   const { title, image, viewLink } = req.body;

//   if (!title) {
//     return res.status(400).json({
//       message: "Title is required"
//     });
//   }

//   const newBook = {
//     id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
//     title,
//     image: image || "",
//     viewLink: viewLink || ""
//   };

//   books.push(newBook);

//   res.status(201).json({
//     message: "Book created successfully",
//     book: newBook
//   });
// };

// const updateBook = (req, res) => {
//   const id = parseInt(req.params.id);

//   const book = books.find((book) => book.id === id);

//   if (!book) {
//     return res.status(404).json({
//       message: "Book not found"
//     });
//   }

//   const { title, image, viewLink } = req.body;

//   if (title !== undefined) book.title = title;
//   if (image !== undefined) book.image = image;
//   if (viewLink !== undefined) book.viewLink = viewLink;

//   res.json({
//     message: "Book updated successfully",
//     book
//   });
// };

// const deleteBook = (req, res) => {
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
// };

// module.exports = {
//   getBooks,
//   getBook,
//   createBook,
//   updateBook,
//   deleteBook
// };





const Book = require("../models/Books.js");

// GET all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get books",
      error: error.message
    });
  }
};

// GET single book
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get book",
      error: error.message
    });
  }
};

// CREATE book
const createBook = async (req, res) => {
  try {
    const { title, image, viewLink } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required"
      });
    }

    const book = await Book.create({
      title,
      image,
      viewLink
    });

    res.status(201).json({
      message: "Book created successfully",
      book
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create book",
      error: error.message
    });
  }
};

// UPDATE book
const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.json({
      message: "Book updated successfully",
      book
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update book",
      error: error.message
    });
  }
};

// DELETE book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.json({
      message: "Book deleted successfully",
      book
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete book",
      error: error.message
    });
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
};