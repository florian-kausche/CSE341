// Import the 'express' module to create a router instance.
const express = require('express');
const router = express.Router(); // Create a new router instance.

// Import the contacts controller to handle route logic.
const contactsController = require('../controllers/contacts');

// Define a route to get all contacts.
// When a GET request is made to the root path ('/'), the 'getAll' method in the controller is called.
// @desc Get all contacts
// @route GET /contacts
// @access Public
router.get('/', async (req, res) => {
  contactsController.getAll(req, res);
});

// Define a route to get a single contact by ID.
// When a GET request is made to '/:id' (with an ID parameter), the 'getSingle' method is called.
// @desc Get single contact
// @route GET /contacts/:id
// @access Public
router.get('/:id', async (req, res) => {
  contactsController.getSingle(req, res);
});

// Define a route to create a new contact.
// When a POST request is made to the root path ('/'), the 'CreateContact' method is called.
// @desc Create new contact
// @route POST /contacts
// @access Public
router.post('/', async (req, res) => {
  contactsController.CreateContact(req, res);
});

// Define a route to update an existing contact by ID.
// When a PUT request is made to '/:id', the 'UpdateContact' method is called.
// @desc Update contact
// @route PUT /contacts/:id
// @access Public
router.put('/:id', async (req, res) => {
  contactsController.UpdateContact(req, res);
});

// Define a route to delete a contact by ID.
// When a DELETE request is made to '/:id', the 'deleteContact' method is called.
// @desc Delete contact
// @route DELETE /contacts/:id
// @access Public
router.delete('/:id', async (req, res) => {
  contactsController.deleteContact(req, res);
});

// Example of a simple route for testing or basic response (commented out).
// router.get('/', (req, res) => {
//     res.send('contacts route');
// });

// Export the router so it can be used in the main application.
module.exports = router;
