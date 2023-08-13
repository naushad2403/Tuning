const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
    }
  },
  apis: ['./index.js' ,'./routes/index.js'], // Path to your API routes
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
