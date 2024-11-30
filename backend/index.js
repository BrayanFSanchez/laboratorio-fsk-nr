const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const patientRoutes = require('./routes/patients');
const symptomRoutes = require('./routes/symptoms');
const relationRoutes = require('./routes/relations');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.log('Error conectando a MongoDB:', error));

// Middleware para parsear el body
// app.use(express.json({ extended: false }));

// Rutes
// app.get('/', (req, res) => res.send('API Running'));
app.use('/api/patients', patientRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/relations', relationRoutes);

// Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));