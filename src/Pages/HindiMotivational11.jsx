import books from "../Data/Hindi_Motivational111";

function Home() {
  return (
    <main className="container">
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
    </main>
  );
}

export default Home;