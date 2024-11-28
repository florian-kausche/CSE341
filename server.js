const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const mongodb = require('./data/database');  // Import the 'database' module.
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Use express' built-in JSON parser middleware
app.use(express.json());

// Add these lines before your route definitions
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

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
