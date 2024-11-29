const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Get all patients
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Add patient
router.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
});

// Update patient
router.put('/:id', async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(patient);
});

// Remove patient
router.delete('/:id', async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: 'Patient deleted' });
});

module.exports = router;