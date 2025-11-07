const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware"); // Middleware to protect routes
const { createBooking, getBookingHistory } = require("../controllers/bookingController"); // Import controllers
const { checkAvailability } = require("../controllers/bookingController");
// Route to create a booking
router.post("/", verifyToken, createBooking);

// Route to fetch booking history
router.get("/history", verifyToken, getBookingHistory);

router.get("/check-availability", checkAvailability); 

console.log("createBooking:", typeof createBooking); // Should log "function"
console.log("getBookingHistory:", typeof getBookingHistory); // Should log "function"

module.exports = router;
