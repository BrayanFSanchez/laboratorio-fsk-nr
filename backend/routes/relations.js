const express = require('express');
const router = express.Router();
const relationController = require('../controllers/relation');

// Relation routes
router.post('/add-symptom', relationController.addSymptomToPatient);
router.post('/remove-symptom', relationController.removeSymptomFromPatient);
router.get('/:id/symptoms', relationController.getPatientWithSymptoms);

module.exports = router;