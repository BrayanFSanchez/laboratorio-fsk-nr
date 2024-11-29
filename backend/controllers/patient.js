const Patient = require('../models/Patient');

// Add patient
exports.createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).json({ message: 'Patient created successfully', data: patient });
    } catch (error) {
        res.status(400).json({ message: 'Error creating patient', error });
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error getting patients', error });
    }
};

// Get a patient by ID
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get patient', error });
    }
};

// Update patient
exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient updated successfully', data: patient });
    } catch (error) {
        res.status(400).json({ message: 'Error updating patient', error });
    }
}

// Remove patient
exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error when deleting patient', error });
    }
};