const express = require('express');
const mongodb = require('./data/database');  // Import the 'database' module.

const app = express();
const port = process.env.PORT || 3000;

// Use express' built-in JSON parser middleware
app.use(express.json());

// Use middleware for routes defined in './routes'
app.use('/', require('./routes'));

// Initialize database connection and start the server
const startServer = async () => {
  try {
    await mongodb.initDb();  // Assuming initDb is promisified or changed to return a promise.
    app.listen(port, () => {
      console.log(`Database connected and server is running on port ${port}`);
    });
  } catch (err) {
    console.log('Failed to connect to the database:', err);
  }
};

startServer();
