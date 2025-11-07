require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow your frontend domain for CORS
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow Authorization header
}));
app.use(express.json()); // Parse incoming JSON requests
app.use(helmet()); // Secure HTTP headers

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/api/auth", require("./routes/authRoutes")); // Authentication routes
app.use("/api/user", require("./routes/userRoutes")); // User account routes
app.use("/api/bookings", require("./routes/bookingRoutes")); // Booking routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/contact", require("./routes/contactRoutes")); // Contact routes

// 404 Route Handler for Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({ msg: "Route not found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error Stack:", err.stack); // Log error stack for debugging
  res.status(500).json({ msg: "Something went wrong on the server" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
