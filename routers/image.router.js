const express = require('express');
const router= express.Router();
const imageController = require('../controllers/image.controller');

//image read
router.get('/read',imageController.read);

//image create
router.post('/create',imageController.create);

//image update
// router.post('/update',imageController.update);

//image delete
// router.post('/delete',imageController.delete);

//image get by id
router.get('/:slug',imageController.getById);

module.exports = router;