const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mood: { type: String },
  stressLevel: { type: Number, min: 1, max: 10 },
  anxietyLevel: { type: Number, min: 1, max: 10 },
  depressionLevel: { type: Number, min: 1, max: 10 },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
