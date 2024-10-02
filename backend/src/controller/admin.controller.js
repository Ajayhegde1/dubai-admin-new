const AdminService = require("../services/admin.service");
const {
  authMiddleware,
  roleMiddleware,
} = require("../middleware/auth.middleware");

exports.createUser = [
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res, next) => {
    try {
      const user = await AdminService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },
];

exports.enableModule = [
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res, next) => {
    try {
      const { userId, moduleName } = req.body;
      const access = await AdminService.enableModule(userId, moduleName);
      res.status(200).json(access);
    } catch (error) {
      next(error);
    }
  },
];

exports.disableModule = [
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res, next) => {
    try {
      const { userId, moduleName } = req.body;
      const access = await AdminService.disableModule(userId, moduleName);
      res.status(200).json(access);
    } catch (error) {
      next(error);
    }
  },
];
