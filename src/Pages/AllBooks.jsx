
import { useState } from "react";

import books from "../Data/Allbooks1";
import BookSearch from "../Component/BookSearch";

import "../css/AllBook.css";

function AllBooks() {

  // All original books
  const [filteredBooks, setFilteredBooks] = useState(books);

  // Search result message
  const [message, setMessage] = useState("");


  // --------------------------------------------------
  // NORMALIZE SEARCH TEXT
  // --------------------------------------------------

  const normalize = (text) => {
    return String(text || "")
      .toLowerCase()
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };


  // --------------------------------------------------
  // SEARCH
  // --------------------------------------------------

  const handleSearch = (searchText) => {

    const text = normalize(searchText);


    // If search box is empty
    if (text === "") {

      setFilteredBooks(books);
      setMessage("");

      return;
    }


    // Find matching books
    const result = books.filter((book) => {

      const title = normalize(book.title);

      const author = normalize(book.author);

      const category = normalize(book.category);


      return (
        title.includes(text) ||
        author.includes(text) ||
        category.includes(text)
      );

    });


    // Update displayed books
    setFilteredBooks(result);


    // Search message
    if (result.length > 0) {

      setMessage(
        `${result.length} book${
          result.length > 1 ? "s" : ""
        } found`
      );

    } else {

      setMessage(
        `"${searchText}" Book Not Found`
      );

    }

  };


  // --------------------------------------------------
  // SHOW ALL BOOKS
  // --------------------------------------------------

  const showAllBooks = () => {

    setFilteredBooks(books);

    setMessage("");

  };


  // --------------------------------------------------
  // OPEN BOOK
  // --------------------------------------------------

  const openBook = (viewLink) => {

    if (!viewLink) {

      alert("Book link is not available.");

      return;
    }

    window.open(
      viewLink,
      "_blank",
      "noopener,noreferrer"
    );

  };


  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (

    <div className="all-books-page">

      <div className="all-books-wrapper">


        {/* PAGE TITLE */}

        <h1 className="all-books-title">
          All Books
        </h1>


        {/* SEARCH */}

        <BookSearch
          onSearch={handleSearch}
        />


        {/* SEARCH MESSAGE */}

        {message && (

          <div className="search-message">

            {message}

          </div>

        )}


        {/* BOOKS */}

        {filteredBooks.length > 0 ? (

          <div className="all-books-grid">

            {filteredBooks.map((book) => (

              <div
                className="all-book-card"
                key={book.id}
              >


                {/* BOOK IMAGE */}

                <div className="all-book-image-box">

                  <img
                    src={book.image}
                    alt={book.title}
                  />

                </div>


                {/* BOOK TITLE */}

                <h3 className="all-book-title">

                  {book.title}

                </h3>


                {/* OPEN BUTTON */}

                <button
                  type="button"
                  className="all-book-button"
                  onClick={() => openBook(book.viewLink)}
                >
                  Open
                </button>


              </div>

            ))}

          </div>

        ) : (


          /* NO BOOK FOUND */

          <div className="all-books-not-found">


            <div className="not-found-icon">
              📚
            </div>


            <h2>
              Book Not Found
            </h2>


            <p>
              Sorry, aapki search se koi book match nahi hui.
            </p>


            <button
              type="button"
              onClick={showAllBooks}
            >
              Show All Books
            </button>


          </div>

        )}

      </div>

    </div>

  );

}

export default AllBooks;
