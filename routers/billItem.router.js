const express = require('express');
const router= express.Router();
const billItemController = require('../controllers/billItem.controller');

//billItem read
router.get('/read',billItemController.read);

//billItem create
router.post('/create',billItemController.create);

//billItem update
router.post('/update',billItemController.update);

//billItem delete
router.post('/delete',billItemController.delete);

//billItem get by type
router.get('/:slug',billItemController.getByType);


module.exports = router;