import books from "../Data/AboutMind1";
import "../css/App.css";


function Home() 
{
  return (
    <div className="container">
      <div className="card">
        {books.map((book) => (
          <div className="item" key={book.id}>
            <img src={book.image} alt={book.title} />

            <h3>{book.title}</h3>

            <a
              href={book.viewLink}
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