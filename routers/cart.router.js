const express = require('express');
const router= express.Router();
const cartController = require('../controllers/cart.controller');

//product read
router.get('/read',cartController.read);

//product create
router.post('/create',cartController.create);

//product update
router.post('/update',cartController.update);

//product delete
router.post('/delete',cartController.delete);

//product get by type
router.get('/:slug',cartController.getByType);


module.exports = router;