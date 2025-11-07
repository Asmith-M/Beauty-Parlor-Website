const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware"); // Import middleware
const { getAccountDetails } = require("../controllers/userController");
const { getBookingHistory } = require("../controllers/bookingController"); // Import controller

router.get("/account", verifyToken, getAccountDetails); // Fetch user account details
router.get("/booking-history", verifyToken, getBookingHistory); // Fetch booking history

console.log("verifyToken:", typeof verifyToken); // Should log "function"
console.log("getBookingHistory:", typeof getBookingHistory); // Should log "function"

module.exports = router;
