// db.js
import pkg from 'pg';
const { Pool } = pkg;

// acá va tu cadena de conexión o tus variables de entorno
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://admin:woJZ5BUElcu4Rxnin7jQBtNAPfvLIJb0@dpg-d4fm8p6r433s73cvjlp0-a.oregon-postgres.render.com/clientesdb_gadd',
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool; // 👈 export ES module

