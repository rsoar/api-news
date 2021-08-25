require('dotenv');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

// gera token
function genToken(params) {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: process.env.EXPIRATION,
  });
}

// cria usuario
exports.store = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({
      error: 'invalid credentials',
    });
  }
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json('invalid email');
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        error: 'invalid password',
      });
    }
    return res.json({
      success: 'logado',
      tokenAcesso: genToken({ id: user.id }),
    });
  } catch (e) {
    console.log(e); // eslint-disable-line
    return res.status(401).json({
      error: 'unauthorized',
    });
  }
};
