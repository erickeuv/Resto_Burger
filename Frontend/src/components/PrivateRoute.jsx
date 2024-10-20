import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Obtenemos el token de localStorage

    return token ? children : <Navigate to="/login" />; // Si hay token, muestra la vista, si no, redirige a login
};

export default PrivateRoute;
