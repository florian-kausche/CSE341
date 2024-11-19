// Import the local 'database' module for MongoDB connection.
const mongodb = require('../data/database');

// Import the 'ObjectId' class from the 'mongodb' module for handling MongoDB document IDs.
const ObjectId = require('mongodb').ObjectId;

// Function to get all contacts from the 'contacts' collection.
const getAll = async (req, res) => {
    // Fetch all documents in the 'contacts' collection.
    const result = await mongodb.getDatabase().collection('contacts').find();
    // Convert the result to an array and send as JSON response.
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json'); // Set response type to JSON.
        res.status(200).json(contacts); // Respond with status 200 and the contacts.
    });
}

// Function to get a single contact by its ID.
const getSingle = async (req, res) => {
    // Create a new ObjectId from the ID provided in the request parameters.
    const contactId = new ObjectId(req.params.id);
    // Find a specific contact by ID in the 'contacts' collection.
    const result = await mongodb.getDatabase().collection('contacts').find({ _id: contactId });
    // Convert the result to an array and send the first contact as a JSON response.
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json'); // Set response type to JSON.
        res.status(200).json(contacts[0]); // Respond with status 200 and the single contact.
    });
}

// Function to create or replace a contact in the database.
const CreateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id); // Create an ObjectId from the request parameter.
    // Create a contact object using the request body data.
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    // Replace a document in the 'contacts' collection with the given contact object.
    const response = await mongodb.getDatabase().collection('contacts').insertOne({ _id: contactId }, contact);
    // Check if the operation was acknowledged and respond accordingly.
    if (response.acknowledged) {
        res.status(201).json(contact);  // Respond with status 201 (created).
    } else {
        res.status(500).json('Some error occurred while creating the contact');
    }
};

// Function to update an existing contact.
const UpdateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id); // Create an ObjectId from the request parameter.
    // Create a contact object with updated data from the request body.
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    // Replace a document in the 'contacts' collection with the updated contact object.
    const response = await mongodb.getDatabase().collection('contacts').updateOne({ $set: contact } );
    // Check if the document was modified and respond accordingly.
    if (response.modifiedCount > 0) {
        res.status(200).json(contact);  // Respond with the updated contact.
    } else {
        res.status(500).json('Some error occurred while updating the contact');
    }
};

// Function to delete a contact (the code provided seems to be a copy of the update function).
const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id); // Create an ObjectId from the request parameter.
    // Create a contact object (this isn't needed for deletion).
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    // Replace this with a deletion command (this part seems incorrect for deletion).
    const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({ _id: contactId }, contact);
    if (response.deletedCount > 0) {
        res.status(204).send(); // Respond with status 204 (no content).
    } else {
        res.status(500).json('Some error occurred while deleting the contact');
    }
};

// Export the functions so they can be used in other parts of the application.
module.exports = {
    getAll,
    getSingle,
    CreateContact,
    UpdateContact,
    deleteContact
};
