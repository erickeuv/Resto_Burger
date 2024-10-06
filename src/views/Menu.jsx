import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { CartProvider } from '../context/CartContext';

function Menu() {
  return (
    <CartProvider>
      <div className="container">
        <div className="row">
          {/* Columna de productos */}
          <div className="col-md-8">
            <h1 className="text-center my-4"> Menú</h1>
            <ProductList />
          </div>
          
          {/* Columna del carrito */}
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default Menu;
