const Temple = require('../models/temple');

// Get all temples
exports.getAllTemples = async (req, res) => {
  try {
    const temples = await Temple.find();
    res.status(200).json(temples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single temple by ID
exports.getTempleById = async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) {
      return res.status(404).json({ message: 'Temple not found' });
    }
    res.status(200).json(temple);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new temple
exports.createTemple = async (req, res) => {
  try {
    const temple = new Temple(req.body);
    const newTemple = await temple.save();
    res.status(201).json(newTemple);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a temple
exports.updateTemple = async (req, res) => {
  try {
    const temple = await Temple.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true, runValidators: true }
    );
    if (!temple) {
      return res.status(404).json({ message: 'Temple not found' });
    }
    res.status(200).json(temple);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a temple
exports.deleteTemple = async (req, res) => {
  try {
    const temple = await Temple.findByIdAndDelete(req.params.id);
    if (!temple) {
      return res.status(404).json({ message: 'Temple not found' });
    }
    res.status(200).json({ message: 'Temple deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};