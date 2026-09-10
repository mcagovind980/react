import { useState } from "react";
import books from "../Data/Allbooks1";
import BookSearch from "../Component/BookSearch";
import "../css/AllBook.css";

function AllBooks() {

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [message, setMessage] = useState("");

  const handleSearch = (searchText) => {

  const text = searchText.trim().toLowerCase();

  if (text === "") {
    setFilteredBooks(books);
    setMessage("");
    return;
  }

  const result = books.filter((book) => {

    const title = String(book.title || "").toLowerCase();

    return title.includes(text);
  });

  setFilteredBooks(result);

  if (result.length > 0) {
    setMessage(`${result.length} book found`);
  } else {
    setMessage(`"${searchText}" Book Not Found`);
  }
};
  const showAllBooks = () => {
    setFilteredBooks(books);
    setMessage("");
  };

  return (
    <div className="all-books-page">

      <div className="all-books-wrapper">

        <h1 className="all-books-title">
          All Books
        </h1>

        {/* SEARCH */}

        <BookSearch onSearch={handleSearch} />


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

                <div className="all-book-image-box">

                  <img
                    src={book.image}
                    alt={book.title}
                  />

                </div>


                <h3 className="all-book-title">
                  {book.title}
                </h3>


                <button
                  type="button"
                  className="all-book-button"
                  onClick={() => {
                    window.location.href = book.viewLink;
                  }}
                >
                  Open
                </button>

              </div>

            ))}

          </div>

        ) : (

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