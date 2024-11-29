const express = require('express');
const router = express.Router();
const Symptom = require('../models/Symptom');

// Get all symptoms
router.get('/', async (req, res) => {
  const symptoms = await Symptom.find();
  res.json(symptoms);
});

// Add symptom
router.post('/', async (req, res) => {
  const symptom = new Symptom(req.body);
  await symptom.save();
  res.json(symptom);
});

// Update symptom
router.put('/:id', async (req, res) => {
  const symptom = await Symptom.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(symptom);
});

// Remove symptom
router.delete('/:id', async (req, res) => {
  await Symptom.findByIdAndDelete(req.params.id);
  res.json({ message: 'Symptom deleted' });
});

module.exports = router;