const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ msg: "Access forbidden: Admins only" });
    }
    next();
  } catch (err) {
    console.error("Admin token validation error:", err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
console.log("authAdmin defined:", typeof module.exports); // Should log "function"
