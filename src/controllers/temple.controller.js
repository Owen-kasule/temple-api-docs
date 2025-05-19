// filepath: /temple-api-docs/temple-api-docs/src/controllers/temple.controller.js

const Temple = require('../models/temple.model');

// Create a new temple
exports.createTemple = async (req, res) => {
    try {
        const temple = new Temple(req.body);
        await temple.save();
        res.status(201).send(temple);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all temples
exports.getAllTemples = async (req, res) => {
    try {
        const temples = await Temple.find();
        res.status(200).send(temples);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a temple by ID
exports.getTempleById = async (req, res) => {
    try {
        const temple = await Temple.findById(req.params.id);
        if (!temple) {
            return res.status(404).send();
        }
        res.status(200).send(temple);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a temple by ID
exports.updateTemple = async (req, res) => {
    try {
        const temple = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!temple) {
            return res.status(404).send();
        }
        res.status(200).send(temple);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a temple by ID
exports.deleteTemple = async (req, res) => {
    try {
        const temple = await Temple.findByIdAndDelete(req.params.id);
        if (!temple) {
            return res.status(404).send();
        }
        res.status(200).send(temple);
    } catch (error) {
        res.status(500).send(error);
    }
};