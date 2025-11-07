import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchBookingStats } from "../../api";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalBookingsToday: 0,
    completedBookings: 0,
    upcomingBookings: 0,
  });
  const [error, setError] = useState("");
  const [sortField, setSortField] = useState("");
  const [filterText, setFilterText] = useState("");

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get("http://localhost:5000/api/admin/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(response.data);
    } catch (err) {
      console.error("Error fetching bookings:", err.message);
      setError("Failed to load bookings. Please try again.");
    }
  };

  const loadStats = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const data = await fetchBookingStats(token);
      setStats(data);
    } catch (err) {
      console.error("Error loading stats:", err.message);
      setError("Failed to load stats.");
    }
  };

  useEffect(() => {
    fetchBookings();
    loadStats();
  }, []);

  const handleSortChange = (e) => {
    setSortField(e.target.value);
    const sortedBookings = [...bookings].sort((a, b) => {
      if (a[e.target.value] && b[e.target.value]) {
        return a[e.target.value].localeCompare(b[e.target.value]);
      }
      return 0;
    });
    setBookings(sortedBookings);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.name.toLowerCase().includes(filterText.toLowerCase()) ||
      booking.service.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="admin-dashboard">
      <h1 className="text-4xl font-serif font-bold text-primary mb-4">Admin Dashboard</h1>
      {error && <p className="error">{error}</p>}

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-box">
          <h3 className="text-xl font-serif font-bold text-primary mb-2">Total Bookings Today</h3>
          <p>{stats.totalBookingsToday}</p>
        </div>
        <div className="stat-box">
          <h3 className="text-xl font-serif font-bold text-primary mb-2">Completed Bookings</h3>
          <p>{stats.completedBookings}</p>
        </div>
        <div className="stat-box">
          <h3 className="text-xl font-serif font-bold text-primary mb-2">Upcoming Bookings</h3>
          <p>{stats.upcomingBookings}</p>
        </div>
      </div>


      {/* Filters and Table */}
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by name or service"
          value={filterText}
          onChange={handleFilterChange}
        />
        <select value={sortField} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="service">Service</option>
          <option value="date">Date</option>
        </select>
      </div>

      <table className="bookings-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.service}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{booking.time}</td>
              <td>{booking.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;