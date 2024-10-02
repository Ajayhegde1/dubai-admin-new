const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signUp = async ({ username, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const defaultPermissions = {
    passportAccess: false,
    visaAccess: false,
    flightAccess: false,
    registrationAccess: false,
    advertisementAccess: false,
    formCollectionAccess: false,
  };
  const permissions =
    role === "admin"
      ? {
          ...defaultPermissions,
          passportAccess: true,
          visaAccess: true,
          flightAccess: true,
          registrationAccess: true,
          advertisementAccess: true,
          formCollectionAccess: true,
        }
      : defaultPermissions;
  const user = await User.create({
    username,
    password: hashedPassword,
    role,
    ...permissions,
  });

  return user;
};

exports.signIn = async ({ username, password }) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token, user };
};
