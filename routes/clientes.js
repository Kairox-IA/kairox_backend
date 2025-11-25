// routes/clientes.js (versión CommonJS)
const express = require('express');
const pool = require('../db'); // ajustamos según cómo exportes en db.js

const router = express.Router();

// GET /api/clientes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios'); // tu tabla
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

module.exports = router;

