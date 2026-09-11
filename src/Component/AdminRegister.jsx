import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminRegister() {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {

      const response = await fetch(
        "http://localhost:5000/api/admin/register",
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

      setMessage("Admin registration successful ✅");

      setFormData({
        username: "",
        password: ""
      });

      setTimeout(() => {
        navigate("/admin/login");
      }, 1000);

    } catch (error) {

      console.log("Admin Register Error:", error);

      setError("Server se connection nahi ho raha");
    }
  };

  return (
    <div className="container">
    <div className="user-login">

      <h1>Admin Sign Up</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Enter Admin Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Admin Password"
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
          Sign Up
        </button>

      </form>

      <br />

      <button onClick={() => navigate("/admin/login")}>
       Login
      </button>

    </div>
    </div>
  );
}

export default AdminRegister;