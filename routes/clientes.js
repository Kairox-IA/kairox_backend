const express = require('express');
const router = express.Router();
const pool = require('../db');

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo clientes' });
  }
});

// Crear un cliente
router.post('/', async (req, res) => {
  const { nombre, email, telefono } = req.body;
  try {
    const nuevaRow = await pool.query(
      'INSERT INTO usuarios(nombre, email, telefono) VALUES($1, $2, $3) RETURNING *',
      [nombre, email, telefono]
    );
    res.json(nuevaRow.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creando cliente' });
  }
});

module.exports = router;
