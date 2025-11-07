const express = require("express");
const router = express.Router();
const { adminLogin, getBookingStats, getAllBookings } = require("../controllers/adminController"); // Import methods
const authAdmin = require("../middleware/authAdmin"); // Import middleware

console.log("adminLogin:", typeof adminLogin); // Should log "function"
console.log("getBookingStats:", typeof getBookingStats); // Should log "function"
console.log("authAdmin:", typeof authAdmin); // Should log "function"

// Admin login route
router.post("/login", adminLogin);

// Admin stats route (protected)
router.get("/stats", authAdmin, getBookingStats);

// Fetch all bookings (protected)
router.get("/bookings", authAdmin, getAllBookings);


module.exports = router;
