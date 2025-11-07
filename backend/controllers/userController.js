const User = require("../models/User");
const Booking = require("../models/Booking");

exports.getAccountDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    const bookings = await Booking.find({ userId: req.user.id });
    res.json({ user, bookings });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
