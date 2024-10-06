import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard'; // Asegúrate de que la ruta sea correcta
import { CartContext } from '../context/CartContext'; // Importa el contexto del carrito

function ProductList() {
  const { addItem } = useContext(CartContext); // Usa el contexto del carrito

  return (
    <div className="flex flex-wrap justify-around"> {/* Flexbox para organizar las tarjetas */}
      <ProductCard 
        title="Hamburguesa" 
        imageUrl="https://via.placeholder.com/100x100" // Ajustado a un tamaño más cuadrado
        description="Deliciosa hamburguesa de carne." 
        price="$8500"
        onAdd={addItem} // Pasa la función onAdd
      />
      <ProductCard 
        title="Sushi" 
        imageUrl="https://via.placeholder.com/100x100" // Ajustado a un tamaño más cuadrado
        description="Sushi con ingredientes frescos." 
        price="$9500"
        onAdd={addItem} // Pasa la función onAdd
      />
      <ProductCard 
        title="Gohan" 
        imageUrl="https://via.placeholder.com/100x100" // Ajustado a un tamaño más cuadrado
        description="Gohan fresco y saludable." 
        price="$7500"
        onAdd={addItem} // Pasa la función onAdd
      />
    </div>
  );
}

export default ProductList;
