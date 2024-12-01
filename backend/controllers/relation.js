const Patient = require('../models/Patient');
const Symptom = require('../models/Symptom');

// Add Symptom to patient
exports.addSymptomToPatient = async (req, res) => {
    const { patientId, symptomId } = req.body;
    try {
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
  
        const symptom = await Symptom.findById(symptomId);
        if (!symptom) {
            return res.status(404).json({ message: 'Symptom not found' });
        }
  
        if (!patient.symptoms.includes(symptomId)) {
            patient.symptoms.push(symptomId);
            await patient.save();
        }
        
        res.status(200).json({ message: 'Patient-related symptom', data: patient });
    } catch (error) {
        res.status(500).json({ message: 'Error when associating symptom', error });
    }
};

// Deleting a symptom from a patient
exports.removeSymptomFromPatient = async (req, res) => {
    const { patientId, symptomId } = req.body;
    try {
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
  
        // Filter to remove the symptom
        patient.symptoms = patient.symptoms.filter(id => id.toString() !== symptomId);
        await patient.save();
  
        res.status(200).json({ message: 'Symptom removed from patient', data: patient });
    } catch (error) {
        res.status(500).json({ message: 'Error when removing symptom', error });
    }
};

// Get a patient with their symptoms
exports.getPatientWithSymptoms = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('symptoms');
        if (!patient) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener paciente', error });
    }
};