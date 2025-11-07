const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true }, // Ensure this matches input from frontend
  time: { type: String, required: false },
  name: { type: String, required: false },
  email: { type: String, required: false },
  status: { type: String, default: "Upcoming", enum: ["Upcoming", "Completed", "Cancelled"] },
});

module.exports = mongoose.model("Booking", BookingSchema);
