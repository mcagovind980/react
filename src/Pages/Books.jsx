import books from "../Data/Books1";

function Home() {
  return (
    <main className="conatiner">
      <div className="card">

        {books.map((book) => (
          <div className="item" key={book.id}>

            <div className="book-image-box">
              <img src={book.image} alt={book.title} />

              <span className="discount">
                {Math.round(
                  ((book.originalPrice - book.price) / book.originalPrice) * 100
                )}% OFF
              </span>
            </div>

            <div className="book-info">

              <p className="category">
                {book.category}
              </p>

              <h3>{book.title}</h3>

              <p className="author">
                By {book.author}
              </p>

              <p className="rating">
                ⭐⭐⭐⭐ {book.rating}
              </p>

              <div className="price-box">
                <span className="price">
                  ₹{book.price}
                </span>

                <span className="original-price">
                  ₹{book.originalPrice}
                </span>
              </div>

              <p className="stock">
                {book.inStock ? "✓ In Stock" : "Out of Stock"}
              </p>

              <div className="book-buttons">

                <a
                  href={book.link}
                  className="view-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📖 View PDF
                </a>

                <a
                  href={book.buyLink}
                  className="buy-btn"
                >
                  🛒 Buy Now
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>
    </main>
  );
}

export default Home;