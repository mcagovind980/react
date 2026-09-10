import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"
function UserRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Register
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      setMessage("Registration successful ✅");

      // Form reset
      setFormData({
        name: "",
        email: "",
        password: ""
      });

      // 1 second baad login page
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      console.log("Register Error:", error);

      setError(
        "Server se connection nahi ho raha"
      );
    }
  };

  return (
    <div className="container">

    <div className="user-login">

      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br />

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        {message && (
          <p style={{ color: "green" }}>
            {message}
          </p>
        )}

        <button type="submit">
          Register
        </button>

      </form>

    </div>
    </div>
  );
}

export default UserRegister;