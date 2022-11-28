const express = require('express');
const router= express.Router();
const cartItemController = require('../controllers/cartItem.controller');

//product read
router.get('/read',cartItemController.read);

//product create
router.post('/create',cartItemController.create);

//product update
router.post('/update',cartItemController.update);

//product delete
router.post('/delete',cartItemController.delete);

//product get by type
router.get('/:slug',cartItemController.getByType);


module.exports = router;