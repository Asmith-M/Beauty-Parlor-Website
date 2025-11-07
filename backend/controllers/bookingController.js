const Booking = require("../models/Booking");

// Function to create a booking
exports.createBooking = async (req, res) => {
  try {
    const { service, date, time, name, email } = req.body;

    const booking = new Booking({
      userId: req.user.id, // From authMiddleware
      service,
      date,
      time,
      name,
      email,
    });

    await booking.save();
    res.json({ msg: "Booking successful", booking });
  } catch (err) {
    console.error("Booking creation error:", err.message);
    res.status(500).send("Server error");
  }
};

// Function to get booking history (current and previous bookings)
exports.getBookingHistory = async (req, res) => {
  try {
    const currentBookings = await Booking.find({
      userId: req.user.id,
      date: { $gte: new Date() }, // Future bookings (including today)
    });

    const previousBookings = await Booking.find({
      userId: req.user.id,
      date: { $lt: new Date() }, // Past bookings
    });

    res.json({ current: currentBookings, previous: previousBookings });
  } catch (err) {
    console.error("Error fetching booking history:", err.message);
    res.status(500).send("Server error");
  }
};

exports.checkAvailability = async (req, res) => {
  const { service, date, time } = req.query; // Expecting these as query parameters

  try {
    const conflictingBooking = await Booking.findOne({ service, date, time });
    if (conflictingBooking) {
      return res.status(409).json({ available: false, message: "Time slot is already booked." });
    }
    res.status(200).json({ available: true, message: "Time slot is available." });
  } catch (error) {
    console.error("Error checking availability:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};