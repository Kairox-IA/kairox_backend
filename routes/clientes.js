// routes/clientes.js
import express from 'express';
import pool from '../db.js';

const router = express.Router();

// GET /api/clientes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios'); // o la tabla que sea
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

export default router; // 👈 export default

