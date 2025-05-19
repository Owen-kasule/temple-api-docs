const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  dedicated: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Temple', templeSchema);