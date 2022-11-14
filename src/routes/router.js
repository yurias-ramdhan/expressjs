const express = require('express');
const Home = require('../controllers/home');
const Profile = require('../controllers/profile');
const Contact = require('../controllers/contact');

const router = express.Router();

router.get('/', Home.home);
router.get('/profile', Profile.profile);
router.get('/contact', Contact.contact);

module.exports = router;
