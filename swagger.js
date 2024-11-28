const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: 'yhttps://cse341-project-fzn3.onrender.com',  //Render Url
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/contacts.js'];  // Path to your route files

swaggerAutogen(outputFile, endpointsFiles, doc); 