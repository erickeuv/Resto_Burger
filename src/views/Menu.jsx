
import React from 'react';
import ProductCard from '../components/ProductCard';


function ProductList() {
  return (
    <div className="d-flex flex-wrap justify-content-around"> {/* Flexbox para organizar las tarjetas */}
    
      <ProductCard 
        title="Hamburguesa" 
        imageUrl="https://via.placeholder.com/100x180" 
        description="Deliciosa hamburguesa de carne." 
        price= "$8500"
      />
      <ProductCard 
        title="Sushi" 
        imageUrl="https://via.placeholder.com/100x180" 
        description="Sushi con ingredientes frescos." 
        price= "$9500"
      />
      <ProductCard 
        title="Gohan" 
        imageUrl="https://via.placeholder.com/100x180" 
        description="Gohan fresco y saludable." 
        price= "$7500"
      />
     
    </div>
  );
}

export default ProductList;
