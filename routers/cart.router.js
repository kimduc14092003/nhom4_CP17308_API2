const express = require('express');
const router= express.Router();
const cartController = require('../controllers/cart.controller');

//cart read
router.get('/read',cartController.read);

//cart create
router.post('/create',cartController.create);

//cart update
router.post('/update',cartController.update);

//cart delete
router.post('/delete',cartController.delete);

//cart get by type
router.get('/:slug',cartController.getByType);


module.exports = router;