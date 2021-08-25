const UserModel = require('../models/User');

// index
exports.index = async (req, res) => {
  const user = await UserModel.findAll();
  return res.json({
    usuários: user,
  });
};

// create
exports.store = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await UserModel.create({
      username,
      email,
      password,
    });
    return res.json({
      success: 'successfully registered the user',
      user,
    });
  } catch (err) {
    return res.status(400).json({
      errors: err.errors.map(((e) => e.message)),
    });
  }
};
