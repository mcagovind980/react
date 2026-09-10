import { useState } from "react";
import "../css/BookSearch.css";

function BookSearch({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  const clearSearch = () => {
    setSearch("");
    onSearch("");
  };

  return (
    <div className="book-search">
      <div className="search-box">

        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          type="button"
          className="search-btn"
          onClick={handleSearch}
        >
          🔍 Search
        </button>

        {search && (
          <button
            type="button"
            className="clear-btn"
            onClick={clearSearch}
          >
            ✕
          </button>
        )}

      </div>
    </div>
  );
}

export default BookSearch;