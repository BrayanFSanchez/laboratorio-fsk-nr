const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
});

module.exports = mongoose.model('Symptom', symptomSchema);