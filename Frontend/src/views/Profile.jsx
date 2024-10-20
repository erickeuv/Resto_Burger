// frontend/src/views/Profile.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No hay sesión activa. Por favor, inicia sesión.');
        return;
      }

      try {
        const userResponse = await axios.get('http://localhost:5001/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(userResponse.data);

        // Obtener historial de compras
        const purchasesResponse = await axios.get('http://localhost:5001/api/compras/historial', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPurchaseHistory(purchasesResponse.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Error al obtener los datos del usuario');
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!userData) return <div>Cargando...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <h3 className="text-xl font-semibold mt-4">Historial de Compras</h3>
      {purchaseHistory.length > 0 ? (
        <ul className="list-disc list-inside">
          {purchaseHistory.map((purchase) => (
            <li key={purchase.id}>
              <p>Compra ID: {purchase.id} - Fecha: {new Date(purchase.purchase_date).toLocaleDateString()}</p>
              {/* Agrega más detalles de la compra según tu modelo de datos */}
              <ul>
                {purchase.items.map(item => (
                  <li key={item.product_id}>
                    {item.product_name} - Cantidad: {item.quantity} - Precio: ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay historial de compras.</p>
      )}
    </div>
  );
};

export default Profile;
