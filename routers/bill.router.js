const express = require('express');
const router= express.Router();
const billController = require('../controllers/bill.controller');

//bill read
router.get('/read',billController.read);

//bill create
router.post('/create',billController.create);

//bill update
router.post('/update',billController.update);

//bill delete
router.post('/delete',billController.delete);

//bill get by State of Order
router.get('/all',billController.getByUserState);
router.get('/delivering',billController.getByUserState);
router.get('/received',billController.getByUserState);
router.get('/canceled',billController.getByUserState);

//bill get by UserID
router.get('/:slug',billController.getByUserID);


module.exports = router;