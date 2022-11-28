const express = require('express');
const router= express.Router();
const typeController = require('../controllers/type.controller');

//type read
router.get('/read',typeController.read);

//type create
router.post('/create',typeController.create);

//type update
router.post('/update',typeController.update);

//type delete
router.post('/delete',typeController.delete);

module.exports = router;