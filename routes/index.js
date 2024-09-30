const express = require('express');
require('dotenv').config(); // Loads environment variables

const router = express.Router();

// Define routes here
router.get('/', (req, res) => res.send('Hello World'));

router.use('/users', require('./users')); // Load 'users' routes

module.exports = router;
