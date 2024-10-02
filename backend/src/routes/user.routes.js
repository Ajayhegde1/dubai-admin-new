const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/users", UserController.getAllUsers);
router.get(
  "/users/:id",
  authMiddleware.verifyAdmin,
  UserController.getUserById
);
router.put(
  "/users/:id/access",
  // authMiddleware.verifyAdmin,
  UserController.updateUserAccess
);

module.exports = router;
