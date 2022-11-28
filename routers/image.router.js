const express = require('express');
const router= express.Router();
const imageController = require('../controllers/image.controller');

//product read
router.get('/read',imageController.read);

//product create
router.post('/create',imageController.create);

//product update
// router.post('/update',imageController.update);

//product delete
// router.post('/delete',imageController.delete);

//product get by id
router.get('/:slug',imageController.getById);

module.exports = router;