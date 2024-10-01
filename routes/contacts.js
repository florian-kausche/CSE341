const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/',contactsController.getAll);
router.get('/:id',contactsController.getSingle);

router.get('/', (req, res) => {
    res.send('contacts route');
});

module.exports = router;