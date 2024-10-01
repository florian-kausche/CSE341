const express = require('express');
require('dotenv').config(); // Loads environment variables

const router = express.Router();

// Define routes here
router.get('/', (req, res) => res.send('Hello World'));

router.use('/contacts', require('./contacts')); // Load 'contacts' routes

module.exports = router;
