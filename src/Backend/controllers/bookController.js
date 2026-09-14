

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