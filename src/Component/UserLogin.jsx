
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import "../css/Lo.css";

import Home from "../Pages/Home";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
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

      // JWT token save
      localStorage.setItem(
        "userToken",
        data.token
      );

      // User information save
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setMessage("Login successful ✅");

      // Home page par bhejo
      setTimeout(() => {
        navigate("/");
      }, 500);

    } catch (error) {
      console.log("Login Error:", error);

      setError(
        "Server se connection nahi ho raha"
      );
    }
  };

  return (
    <div className="login-page">

      {/* HOME BACKGROUND */}
      <div className="home-background">
        <Home />
      </div>

      {/* DARK TRANSPARENT OVERLAY */}
      <div className="login-overlay">

        {/* LOGIN CARD */}
        <div className="user-login">

          <h1>User Login</h1>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

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
              Login
            </button>

            <button
              type="button"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default UserLogin;
