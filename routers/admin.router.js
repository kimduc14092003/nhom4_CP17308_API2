const express = require('express');
const router= express.Router();
const adminControllers = require('../controllers/admin.controller');

//user login
router.post('/login',adminControllers.login);

module.exports = router;