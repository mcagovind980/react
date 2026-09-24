import "../css/Loader.css"
function Loader() {
  return (
    <div className="book-loader">

      <div className="skeleton-title"></div>
      <div className="skeleton-title1"></div>

      <div className="skeleton-grid">
        <div className="book-skeleton"></div>
        <div className="book-skeleton"></div>
        <div className="book-skeleton"></div>
        <div className="book-skeleton"></div>
      </div>

    </div>
  );
}

export default Loader;