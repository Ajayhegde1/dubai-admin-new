const AuthService = require("../services/auth.service");

exports.signUp = async (req, res) => {
  try {
    const user = await AuthService.signUp(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { token, user } = await AuthService.signIn(req.body);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
