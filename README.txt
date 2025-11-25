KAIROX Backend - Gestión de Clientes
====================================

1) Requisitos:
   - Node.js 18+
   - Acceso al SQL Server 170.83.248.155:11433
   - Tabla Clientes creada:

      CREATE TABLE Clientes (
          id INT IDENTITY(1,1) PRIMARY KEY,
          nombre NVARCHAR(255),
          email NVARCHAR(255),
          fechaAlta DATE
      );

2) Instalación:
   - Descomprimir este ZIP en C:\kairox-backend
   - Abrir una consola (CMD o PowerShell) en esa carpeta
   - Ejecutar:
        npm install
        npm start

   La API quedará escuchando en:
        http://<IP_DEL_SERVIDOR>:3000/

   Endpoint de prueba:
        GET /  -> devuelve status ok
        GET /api/clientes

3) Producción (opcional con pm2):
   - npm install -g pm2
   - pm2 start server.js --name kairox-backend
   - pm2 save
