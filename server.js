const express = require('express');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/clientes', clientesRoutes);

// Ruta por defecto
app.get('/', (req, res) => {
  res.send('API Kairox funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
