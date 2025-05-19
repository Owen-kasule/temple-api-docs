const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/swagger/swagger-output.json';
const endpointsFiles = ['./src/routes/temple.routes.js'];

const doc = {
    info: {
        title: 'Temple API',
        description: 'API documentation for the Temple management system',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../app.js'); // Your project's entry point
});