// backend/routes/carrito.js

import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Obtener el carrito de un usuario
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM detalle_carrito WHERE user_id = $1', [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener el carrito:', err);
    res.status(500).json({ error: 'Error al obtener el carrito' });
  }
});

// Añadir producto al carrito
router.post('/', async (req, res) => {
  const { userId, productId, cantidad } = req.body;
  try {
    // Si el producto ya está en el carrito, actualiza la cantidad
    await pool.query(
      `INSERT INTO detalle_carrito (user_id, product_id, cantidad) 
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, product_id) 
      DO UPDATE SET cantidad = detalle_carrito.cantidad + $3`,
      [userId, productId, cantidad]
    );
    res.status(201).json({ message: 'Producto añadido al carrito' });
  } catch (err) {
    console.error('Error al añadir al carrito:', err);
    res.status(500).json({ error: 'Error al añadir al carrito' });
  }
});

export default router;
