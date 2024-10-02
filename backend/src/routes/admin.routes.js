const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin.controller");

router.post("/createUser", AdminController.createUser);
router.post("/enableModule", AdminController.enableModule);
router.post("/disableModule", AdminController.disableModule);

module.exports = router;
