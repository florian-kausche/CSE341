const express = require('express');

require('dotenv').config();

const router = express.Router();

// Define routes here
router.get('/', (req, res) => res.send('Hello World'));

module.exports = router;

