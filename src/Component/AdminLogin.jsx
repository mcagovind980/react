

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../css/Login.css"
function AdminLogin() {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

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

    setError("");

    try {

      const response = await fetch(
        "http://localhost:5000/api/admin/login",
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
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("adminToken", data.token);

      navigate("/admin/books");

    } catch (error) {

      console.log("Login Error:", error);

      setError("server is not able to connect");
    }
  };

  return (
    <div className="container">
      <div className="login-overlay">

    <div className="user-login">


      <h1>Admin Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
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

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <button
        type="button"
        onClick={() => navigate("/admin/register")}
      >
        Create Admin Account
      </button>

    </div>
 </div>
 </div>
 
  );
}

export default AdminLogin;