const jwt = require("jsonwebtoken");
const Booking = require("../models/Booking");

const ADMIN_ACCOUNT = { username: "admin", password: "admin123" };

exports.adminLogin = (req, res) => {
  const { username, password } = req.body;

  if (username !== ADMIN_ACCOUNT.username || password !== ADMIN_ACCOUNT.password) {
    return res.status(401).json({ msg: "Invalid admin credentials" });
  }

  const payload = { role: "admin" };
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" }, (err, token) => {
    if (err) throw err;
    res.json({ token });
  });
};

exports.getBookingStats = async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const totalBookingsToday = await Booking.countDocuments({
      date: { $gte: startOfDay, $lte: endOfDay },
    });

    const completedBookings = await Booking.countDocuments({
      date: { $lt: startOfDay },
    });
    const upcomingBookings = await Booking.countDocuments({
      date: { $gte: startOfDay },
    });

    res.status(200).json({
      totalBookingsToday,
      completedBookings,
      upcomingBookings,
    });
  } catch (error) {
    console.error("Error fetching stats:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
console.log("adminLogin defined:", typeof exports.adminLogin); // Should log "function"
console.log("getBookingStats defined:", typeof exports.getBookingStats); // Should log "function"

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ error: "Failed to fetch bookings." });
  }
};

