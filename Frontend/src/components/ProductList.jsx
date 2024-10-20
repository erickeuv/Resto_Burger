import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; // Asegúrate de que la ruta sea correcta
import { CartContext } from '../context/CartContext'; // Importa el contexto del carrito
import axios from 'axios'; // Importa Axios para hacer la solicitud HTTP

function ProductList() {
  const { addItem } = useContext(CartContext); // Usa el contexto del carrito
  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  // useEffect para cargar los productos desde el backend
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5001/api/products'); // Asegúrate de que la URL sea correcta
        setProducts(response.data); // Guardar los productos en el estado
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    }

    fetchProducts();
  }, []); // El array vacío asegura que el efecto se ejecute una sola vez al montar el componente

  return (
    <div className="flex flex-wrap justify-around"> {/* Flexbox para organizar las tarjetas */}
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          title={product.name} 
          imageUrl={product.image_url} // Asume que tu base de datos tiene un campo 'image_url'
          description={product.description} 
          price={`$${product.price}`} // Ajusta el precio a un formato correcto
          onAdd={() => addItem(product)} // Pasa la función onAdd y el producto
        />
      ))}
    </div>
  );
}

export default ProductList;
