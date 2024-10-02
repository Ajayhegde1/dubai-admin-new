const UserService = require("../services/user.service");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUserAccess = async (req, res) => {
  try {
    const updatedUser = await UserService.updateUserAccess(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
