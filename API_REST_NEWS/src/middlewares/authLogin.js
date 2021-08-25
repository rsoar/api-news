require('dotenv');
const jwt = require('jsonwebtoken');
const signinController = require('../controllers/signinController');

module.exports = (req, res, next) => { // eslint-disable-line
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      error: 'Faca login',
    });
  }
  const [prefix, token] = authorization.split(' ');
  try {
    const data = jwt.verify(token, process.env.SECRET);
    next();
  } catch (e) {
    return res.status(401).json({
      error: 'token must be valid',
    });
  }
};
