const express = require('express');
const Controller = require('../controllers/controller');
const saya = require('../controllers/katakan');

const router = express.Router();

router.get('/halo', Controller.sayHi);
router.get('/yurias', saya.namasaya);

module.exports = router;
