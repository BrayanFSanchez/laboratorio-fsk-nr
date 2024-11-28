const express = require('express');
// const connectDB = require('./config/db');

const app = express();

// Conectar a la base de datos
// connectDB();

// Middleware para parsear el body
// app.use(express.json({ extended: false }));

// Rutes
app.get('/', (req, res) => res.send('API Running'));

// Define tus rutas aquí

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));