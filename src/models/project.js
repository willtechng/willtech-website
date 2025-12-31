const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      default: 'General'
    },

    image: {
      type: String
    },

    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'published'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);
