const express = require('express');
const router = express.Router();
const templeController = require('../controllers/temple.controller');

// Route to create a new temple
router.post('/', templeController.createTemple);

// Route to get all temples
router.get('/', templeController.getAllTemples);

// Route to get a temple by ID
router.get('/:id', templeController.getTempleById);

// Route to update a temple by ID
router.put('/:id', templeController.updateTemple);

// Route to delete a temple by ID
router.delete('/:id', templeController.deleteTemple);

module.exports = router;