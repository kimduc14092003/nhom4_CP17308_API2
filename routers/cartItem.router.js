const express = require('express');
const router= express.Router();
const cartItemController = require('../controllers/cartItem.controller');

//cartItem read
router.get('/read',cartItemController.read);

//cartItem create
router.post('/create',cartItemController.create);

//cartItem update
router.post('/update',cartItemController.update);

//cartItem delete
router.post('/delete',cartItemController.delete);

//cartItem get by type
router.get('/:slug',cartItemController.getByType);


module.exports = router;