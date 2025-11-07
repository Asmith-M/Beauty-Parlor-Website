import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { fetchBookingStats } from "../../api";
import { Calendar, CheckCircle, Clock, Search, Filter, TrendingUp } from 'lucide-react';
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalBookingsToday: 0,
    completedBookings: 0,
    upcomingBookings: 0,
  });
  const [error, setError] = useState("");
  const [sortField, setSortField] = useState("");
  const [filterText, setFilterText] = useState("");

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      toast.error("Please login as admin to access dashboard");
      navigate("/admin/login");
    }
  }, [navigate]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get("http://localhost:5000/api/admin/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(response.data);
      toast.success("📊 Bookings loaded successfully!");
    } catch (err) {
      console.error("Error fetching bookings:", err.message);
      const errorMsg = "Failed to load bookings. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  const loadStats = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const data = await fetchBookingStats(token);
      setStats(data);
    } catch (err) {
      console.error("Error loading stats:", err.message);
      const errorMsg = "Failed to load stats.";
      setError(errorMsg);
      toast.error(errorMsg);
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
      <div className="dashboard-header">
        <h1 className="text-5xl font-serif font-bold text-primary mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage bookings and view statistics</p>
      </div>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg max-w-6xl mx-auto">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-icon bg-blue-100">
            <Calendar className="text-blue-600" size={28} />
          </div>
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Today's Bookings</h3>
          <p className="text-4xl font-bold text-blue-600">{stats.totalBookingsToday}</p>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
            <TrendingUp size={14} />
            <span>Active</span>
          </div>
        </div>
        
        <div className="stat-box">
          <div className="stat-icon bg-green-100">
            <CheckCircle className="text-green-600" size={28} />
          </div>
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Completed</h3>
          <p className="text-4xl font-bold text-green-600">{stats.completedBookings}</p>
          <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
            <span>All time</span>
          </div>
        </div>
        
        <div className="stat-box">
          <div className="stat-icon bg-purple-100">
            <Clock className="text-purple-600" size={28} />
          </div>
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Upcoming</h3>
          <p className="text-4xl font-bold text-purple-600">{stats.upcomingBookings}</p>
          <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
            <span>Scheduled</span>
          </div>
        </div>
      </div>

      {/* Filters and Table */}
      <div className="max-w-6xl mx-auto">
        <div className="filters">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or service..."
              value={filterText}
              onChange={handleFilterChange}
              className="pl-12"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select value={sortField} onChange={handleSortChange} className="pl-12">
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="service">Service</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="bookings-table-container">
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
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="font-semibold text-gray-800">{booking.name}</td>
                    <td>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {booking.service}
                      </span>
                    </td>
                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                    <td className="font-medium text-primary">{booking.time}</td>
                    <td className="text-gray-600">{booking.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;