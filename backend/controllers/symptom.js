const Symptom = require('../models/Symptom');

// Add symptom
exports.createSymptom = async (req, res) => {
    try {
        const symptom = new Symptom(req.body);
        await symptom.save();
        res.status(201).json({ message: 'Symptom created successfully', data: symptom });
    } catch (error) {
        res.status(400).json({ message: 'Error creating symptom', error });
  }
};

// Get all symptoms
exports.getSymptoms = async (req, res) => {
    try {
        const symptoms = await Symptom.find();
        res.status(200).json(symptoms);
    } catch (error) {
        res.status(500).json({ message: 'Error getting symptoms', error });
    }
};

// Get a symptom by ID
exports.getSymptomById = async (req, res) => {
    try {
        const symptom = await Symptom.findById(req.params.id);
        if (!symptom) {
            return res.status(404).json({ message: 'Symptom not found' });
        }
        res.status(200).json(symptom);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get symptom', error });
    }
};

// Update symptom
exports.updateSymptom = async (req, res) => {
    try {
        const symptom = await Symptom.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!symptom) {
            return res.status(404).json({ message: 'Symptom not found' });
        }
        res.status(200).json({ message: 'Symptom updated successfully', data: symptom });
    } catch (error) {
        res.status(400).json({ message: 'Error updating symptom', error });
    }
}

// Remove symptom
exports.deleteSymptom = async (req, res) => {
    try {
        const symptom = await Symptom.findByIdAndDelete(req.params.id);
        if (!symptom) {
            return res.status(404).json({ message: 'Symptom not found' });
        }
        res.status(200).json({ message: 'Symptom successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error when deleting symptom', error });
    }
};