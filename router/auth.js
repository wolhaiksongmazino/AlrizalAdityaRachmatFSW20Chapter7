const express = require("express");
const { authController } = require("../controller");
const restrict = require('../middleware/restrict');
const router = express.Router();

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/user', restrict, authController.viewUsers)
router.get('/profile', restrict, authController.profile)
router.post('/game', restrict, authController.game)
router.get('/create', restrict, authController.createRoom)

module.exports = router;