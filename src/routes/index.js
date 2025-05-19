const express = require('express');
const templeRoutes = require('./temple.routes');

const router = express.Router();

const setupRoutes = (app) => {
    app.use('/api/temples', templeRoutes);
};

module.exports = setupRoutes;