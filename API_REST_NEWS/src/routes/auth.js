const { Router } = require('express');
const router = new Router();
const signController = require('../controllers/signinController');
const authLogin = require('../middlewares/authLogin');

router.post('/login', signController.store);

module.exports = router;
