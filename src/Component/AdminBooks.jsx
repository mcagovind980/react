// import { useEffect, useState } from "react";

// function AdminBooks() {
//   const [books, setBooks] = useState([]);

//   const [formData, setFormData] = useState({
//     title: "",
//     image: "",
//     viewLink: ""
//   });

//   const [editId, setEditId] = useState(null);

//   // GET
//   const getBooks = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/books");
//       const data = await response.json();

//       setBooks(data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   useEffect(() => {
//     getBooks();
//   }, []);

//   // Input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // POST / PUT
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const url = editId
//         ? `http://localhost:5000/api/books/${editId}`
//         : "http://localhost:5000/api/books";

//       const method = editId ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method: method,
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       console.log(data);

//       setFormData({
//         title: "",
//         image: "",
//         viewLink: ""
//       });

//       setEditId(null);

//       getBooks();

//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   // EDIT
//   const handleEdit = (book) => {
//     setEditId(book._id);

//     setFormData({
//       title: book.title,
//       image: book.image,
//       viewLink: book.viewLink
//     });
//   };

//   // DELETE
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/books/${id}`,
//         {
//           method: "DELETE"
//         }
//       );

//       const data = await response.json();

//       console.log(data);

//       getBooks();

//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <div>

//       <h1>Admin Book Panel</h1>

//       {/* FORM */}

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="title"
//           placeholder="Book Title"
//           value={formData.title}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="image"
//           placeholder="Book Image"
//           value={formData.image}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="viewLink"
//           placeholder="Google Drive PDF Link"
//           value={formData.viewLink}
//           onChange={handleChange}
//         />

//         <button type="submit">
//           {editId ? "Update Book" : "Add Book"}
//         </button>

//       </form>


//       {/* BOOK LIST */}

//       <hr />

//       {books.map((book) => (

//         <div key={book._id}>

//           <img
//             src={book.image}
//             alt={book.title}
//             width="100"
//           />

//           <h3>{book.title}</h3>

//           <button onClick={() => handleEdit(book)}>
//             Edit
//           </button>

//           <button onClick={() => handleDelete(book._id)}>
//             Delete
//           </button>

//         </div>

//       ))}

//     </div>
//   );
// }

// export default AdminBooks;




import "../css/AdminBooks.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminBooks() {
  const [books, setBooks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    viewLink: ""
  });

  const [editId, setEditId] = useState(null);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // =========================
  // GET ALL BOOKS
  // =========================
  const getBooks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/books"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Books fetch failed");
      }

      setBooks(data);

    } catch (error) {
      console.log("Get Books Error:", error);
      setMessage("Books load nahi ho pa rahi hain");
    }
  };

  // =========================
  // PAGE LOAD
  // =========================
  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    // Token nahi hai
    if (!token) {
      navigate("/admin/login");
      return;
    }

    getBooks();
  }, [navigate]);

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // =========================
  // ADD / UPDATE BOOK
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const url = editId
        ? `http://localhost:5000/api/books/${editId}`
        : "http://localhost:5000/api/books";

      const method = editId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,

        headers: {
          "Content-Type": "application/json",

          // JWT Token
          Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(formData)
      });

      const data = await response.json();

      // Token invalid/expired
      if (response.status === 401) {
        localStorage.removeItem("adminToken");

        navigate("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Operation failed"
        );
      }

      if (editId) {
        setMessage("Book successfully updated ✅");
      } else {
        setMessage("Book successfully added ✅");
      }

      // Form reset
      setFormData({
        title: "",
        image: "",
        viewLink: ""
      });

      setEditId(null);

      // Books reload
      getBooks();

    } catch (error) {
      console.log("Add/Update Error:", error);

      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // EDIT BOOK
  // =========================
  const handleEdit = (book) => {
    setEditId(book._id);

    setFormData({
      title: book.title || "",
      image: book.image || "",
      viewLink: book.viewLink || ""
    });

    setMessage("");
  };

  // =========================
  // DELETE BOOK
  // =========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Kya aap ye book delete karna chahte hain?"
    );

    if (!confirmDelete) {
      return;
    }

    setMessage("");

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/books/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      // Token invalid/expired
      if (response.status === 401) {
        localStorage.removeItem("adminToken");

        navigate("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Delete failed"
        );
      }

      setMessage("Book successfully deleted ✅");

      // Books reload
      getBooks();

    } catch (error) {
      console.log("Delete Error:", error);

      setMessage(error.message);
    }
  };

  // =========================
  // CANCEL EDIT
  // =========================
  const handleCancel = () => {
    setEditId(null);

    setFormData({
      title: "",
      image: "",
      viewLink: ""
    });

    setMessage("");
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    navigate("/admin/login");
  };

  return (
    <div className="admin-books">

      <h1>Admin Book Panel</h1>

      {/* Logout */}
      <button onClick={handleLogout}>
        Logout
      </button>

      <hr />

      {/* Message */}
      {message && (
        <p>
          {message}
        </p>
      )}

      {/* =========================
          ADD / UPDATE FORM
      ========================= */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="text"
          name="image"
          placeholder="Book Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          name="viewLink"
          placeholder="Google Drive PDF Link"
          value={formData.viewLink}
          onChange={handleChange}
        />

        <br />

        <button type="submit" disabled={loading}>
          {loading
            ? "Please wait..."
            : editId
            ? "Update Book"
            : "Add Book"}
        </button>

        {/* Cancel Edit */}
        {editId && (
          <button
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}

      </form>

      <hr />

      {/* =========================
          BOOK LIST
      ========================= */}

      <h2>All Books</h2>

      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <div
            key={book._id}
            className="admin-book-card"
          >

            <img
              src={book.image}
              alt={book.title}
              width="120"
            />

            <h3>
              {book.title}
            </h3>

            <button
              onClick={() => handleEdit(book)}
            >
              Edit
            </button>

            <button
              onClick={() =>
                handleDelete(book._id)
              }
            >
              Delete
            </button>

          </div>
        ))
      )}

    </div>
  );
}

export default AdminBooks;