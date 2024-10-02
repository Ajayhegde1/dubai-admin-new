const User = require("../models/user.model");

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.getUserById = async (userId) => {
  return await User.findByPk(userId);
};

exports.updateUserAccess = async (userId, accessData) => {
  const [updated] = await User.update(accessData, { where: { id: userId } });
  if (updated) {
    return await User.findByPk(userId);
  }
  throw new Error("User not found");
};
