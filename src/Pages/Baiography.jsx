import books from "../Data/Baiography1";
import "../css/App.css";


function Home() {
  return (
    <div className="container">
      <div className="card">
        {books.map((book) => (
          <div className="item" key={book.id}>
            <img src={book.Image} alt={book.title} />

            <h3>{book.title}</h3>

            <a
              href={book.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
      </div>
  );
}

export default Home;