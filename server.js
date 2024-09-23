const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes'); // Correctly requiring routes

app.use('/', routes); // Use routes as middleware

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
