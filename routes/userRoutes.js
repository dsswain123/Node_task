// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../utils/auth');

router.post('/login', userController.login);
router.get('/profile', authMiddleware, userController.viewProfile);
router.put('/profile', authMiddleware, userController.editProfile);

module.exports = router;
