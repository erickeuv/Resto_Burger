import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import pool from './config/database.js'; // Archivo de configuración de la base de datos
import usersRouter from './Routes/users.js';
import carritoRouter from './Routes/carrito.js';
import comprasRouter from './Routes/compras.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Determinar qué archivo de variables de entorno cargar
const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
dotenv.config({ path: envFile });

const app = express();
const port = process.env.PORT || 5000;

// Obtener __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Configurar CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // URL del frontend en desarrollo
    credentials: true,
  })
);

// Servir archivos estáticos desde la carpeta 'dist' generada por Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Cualquier ruta no manejada por las API debe devolver el frontend
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Rutas API
app.use('/api/users', usersRouter);
app.use('/api/carrito', carritoRouter);
app.use('/api/compras', comprasRouter);

// Verificar la conexión a la base de datos de forma asíncrona
async function startServer() {
  try {
    await pool.connect();
    console.log('Conexión exitosa a la base de datos');

    // Iniciar el servidor solo si no se está ejecutando en modo de prueba
    if (process.env.NODE_ENV !== 'test') {
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
      });
    }
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  }
}

// Iniciar el servidor
startServer();

// Exportar la aplicación para usarla en los tests
export default app;
