const { Router } = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/register', userController.store);

module.exports = router;
