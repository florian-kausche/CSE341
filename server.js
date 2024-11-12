// Import the 'express' module to create an Express application.
const express = require('express');

// Import the 'body-parser' module to parse incoming request bodies in a middleware.
const bodyParser = require('body-parser');

// Import the 'database' module (a local module from the './data' directory).
const mongodb = require('./data/database');

// Create an instance of an Express application.
const app = express();

// Set the port number, using the environment variable PORT if available, or default to 3000.
const port = process.env.PORT || 3000;

// Use middleware to handle routes defined in the './routes' module for the root URL ('/').
app.use('/', require('./routes'));

// Use body-parser middleware to parse JSON payloads in incoming requests.
app.use(bodyParser.json());

// Initialize the database connection using a callback function.
mongodb.initDb((err) => {
  // If there is an error during initialization, log it to the console.
  if(err) {
    console.log(err);
  }
  // If the initialization is successful, start the Express server.
  else {
    app.listen(port, () => {
      console.log(`Database is listening and node is running on port ${port}`);
    });
  }
});
