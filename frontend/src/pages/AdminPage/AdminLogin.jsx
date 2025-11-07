import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", formData);
      localStorage.setItem("adminToken", response.data.token); // Save admin token
      navigate("/admin/dashboard"); // Redirect to admin dashboard
    } catch (error) {
      console.error("Admin login error:", error.response || error.message);
      setMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="admin-login-container">
      <h1 className="text-4xl font-serif font-bold text-primary mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default AdminLogin;
