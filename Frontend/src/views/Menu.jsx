import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { CartProvider } from '../context/CartContext';

function Menu() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen"> {/* Contenedor principal */}
        <header className="bg-gray-100 p-4"> {/* Header aquí si es necesario */} </header>

        <main className="flex-grow container mx-auto"> {/* Contenido principal */}
          <div className="row">
            {/* Columna de productos */}
            <div className="col-md-8">
              <h1 className="text-center my-4">Menú</h1>
              <ProductList />
            </div>
            
            {/* Columna del carrito */}
            <div className="col-md-4">
              <Cart />
            </div>
          </div>
        </main>
        
        <footer className="bg-gray-900 text-white p-4"> {/* Footer aquí */} </footer>
      </div>
    </CartProvider>
  );
}

export default Menu;
