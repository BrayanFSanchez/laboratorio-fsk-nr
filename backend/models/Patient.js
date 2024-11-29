const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dateOfBirth: Date,
  address: String,
  phones: [String],
  emails: [String],
});

module.exports = mongoose.model('Patient', patientSchema);