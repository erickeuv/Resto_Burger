import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ title, imageUrl, description, price, onAdd }) { 
  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-4 w-1/4"> {/* Cambiado a w-1/4 para tarjetas más pequeñas */}
      <div className="m-2.5 overflow-hidden rounded-md h-32 flex justify-center items-center"> {/* Ajusta la altura aquí para que sea más cuadrada */}
        <img 
          className="w-2/3 h-full object-cover" // Reduce el ancho de la imagen
          src={imageUrl} 
          alt={title || 'Producto'} 
        />
      </div>
      <div className="p-4 text-center"> {/* Reduce el padding para que la tarjeta sea más compacta */}
        <h4 className="mb-1 text-lg font-semibold text-slate-800">{title || 'Título del Producto'}</h4> {/* Ajusta el tamaño de fuente */}
        <p className="text-sm text-slate-600 mt-2 font-light">{description || 'Descripción del producto.'}</p> {/* Ajusta el tamaño de fuente */}
        <span className="block mt-2 text-lg font-bold text-slate-800">{price}</span>
      </div>
      <div className="flex justify-center p-4 pt-2 gap-3"> {/* Reduce el padding para que la tarjeta sea más compacta */}
        <button 
          className="min-w-32 rounded-md bg-slate-800 py-1 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
          type="button" 
          aria-label={`Añadir ${title} al carrito`}
          onClick={() => onAdd({ title, price: parseFloat(price.replace('$', '')) })} // Asegúrate de que price sea un número
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ProductCard;
