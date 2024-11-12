// Import the 'express' module to create a router instance.
const express = require('express');
const router = express.Router(); // Create a new router instance.

// Import the contacts controller to handle route logic.
const contactsController = require('../controllers/contacts');

// Define a route to get all contacts.
// When a GET request is made to the root path ('/'), the 'getAll' method in the controller is called.
router.get('/', contactsController.getAll);

// Define a route to get a single contact by ID.
// When a GET request is made to '/:id' (with an ID parameter), the 'getSingle' method is called.
router.get('/:id', contactsController.getSingle);

// Define a route to create a new contact.
// When a POST request is made to the root path ('/'), the 'CreateContact' method is called.
router.post('/', contactsController.CreateContact);

// Define a route to update an existing contact by ID.
// When a PUT request is made to '/:id', the 'UpdateContact' method is called.
router.put('/:id', contactsController.UpdateContact);

// Define a route to delete a contact by ID.
// When a DELETE request is made to '/:id', the 'deleteContact' method is called.
router.delete('/:id', contactsController.deleteContact);

// Example of a simple route for testing or basic response (commented out).
// router.get('/', (req, res) => {
//     res.send('contacts route');
// });

// Export the router so it can be used in the main application.
module.exports = router;
