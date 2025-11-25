const express = require('express');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes');
require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend Kairox funcionando en Render');
});

// Rutas API
app.use('/api/clientes', clientesRoutes);

// Puerto dinámico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
