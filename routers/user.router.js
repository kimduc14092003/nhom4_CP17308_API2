const express = require('express');
const router= express.Router();
const userControllers = require('../controllers/user.controller');

//user login
router.post('/login',userControllers.login);

//user register
router.post('/register',userControllers.register);

module.exports = router;