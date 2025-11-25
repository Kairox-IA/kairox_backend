// server.js
import express from 'express';
import cors from 'cors';
import clientesRoutes from './routes/clientes.js'; // 👈 con .js
import './db.js'; // solo para que se ejecute la conexión

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API KAIROX Backend funcionando con PostgreSQL' });
});

// Rutas de clientes
app.use('/api/clientes', clientesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
