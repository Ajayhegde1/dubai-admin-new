const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

exports.verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    if (!decoded || !decoded.username) {
      return res
        .status(401)
        .json({ error: "Token is invalid or does not contain username" });
    }

    console.log("Decoded Token:", decoded); // Debugging line

    const user = await User.findOne({ where: { username: decoded.username } });
    console.log("Fetched User:", user); // Debugging line

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in verifyAdmin:", error); // Debugging line
    next(error);
  }
};
