
const pool = require('../db');

// GET /api/clientes
exports.getClientes = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nombre, email, telefono, fecha_registro FROM usuarios ORDER BY id'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error getClientes:', err);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

// POST /api/clientes
exports.createCliente = async (req, res) => {
  try {
    const { nombre, email, telefono } = req.body;

    const result = await pool.query(
      'INSERT INTO usuarios (nombre, email, telefono) VALUES ($1, $2, $3) RETURNING *',
      [nombre, email, telefono]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error createCliente:', err);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

// PUT /api/clientes/:id
exports.updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;

    const result = await pool.query(
      'UPDATE usuarios SET nombre = $1, email = $2, telefono = $3 WHERE id = $4 RETURNING *',
      [nombre, email, telefono, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updateCliente:', err);
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
};

// DELETE /api/clientes/:id
exports.deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json({ message: 'Cliente eliminado' });
  } catch (err) {
    console.error('Error deleteCliente:', err);
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};
