const express = require('express');
const router = express.Router();
const symptomController = require('../controllers/symptom');

// Symptom routes
router.post('/', symptomController.createSymptom);
router.get('/', symptomController.getSymptoms);
router.get('/:id', symptomController.getSymptomById);
router.put('/:id', symptomController.updateSymptom);
router.delete('/:id', symptomController.deleteSymptom);

module.exports = router;