const User = require("../models/user.model");
const Access = require("../models/access.model");

exports.createUser = async (userData) => {
  const { username, password, role } = userData;

  const user = await User.create({
    username,
    password,
    role,
  });

  // Initialize access for new users
  await Access.create({ userId: user.id });

  return user;
};

exports.enableModule = async (userId, moduleName) => {
  const access = await Access.findOne({ where: { userId } });
  if (!access) throw new Error("Access not found.");

  access[moduleName] = true;
  await access.save();

  return access;
};

exports.disableModule = async (userId, moduleName) => {
  const access = await Access.findOne({ where: { userId } });
  if (!access) throw new Error("Access not found.");

  access[moduleName] = false;
  await access.save();

  return access;
};
