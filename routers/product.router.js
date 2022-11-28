const express = require('express');
const router= express.Router();
const productController = require('../controllers/product.controller');

//product read
router.get('/read',productController.read);

//product create
router.post('/create',productController.create);

//product update
router.post('/update',productController.update);

//product delete
router.post('/delete',productController.delete);

//product get by type
router.get('/:slug',productController.getByType);


module.exports = router;