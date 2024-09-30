const express = require('express');

const mongodb = require('./data/database');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes')); // Use routes as middleware

mongodb.initDb((err) => {
  if(err) {
    console.log(err)
  }
  else {
    app.listen(port, () => {
      console.log(`Database is listening and node is running on port ${port}`)});
  }
});
