import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ title, imageUrl, description }) { 
  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96"> {/* Contenedor principal */}
      <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center"> {/* Contenedor de la imagen */}
        <img className="w-full h-full object-cover" src={imageUrl} alt={title || 'Producto'} /> {/* Imagen del producto */}
      </div>
      <div className="p-6 text-center"> {/* Contenedor del texto */}
        <h4 className="mb-1 text-xl font-semibold text-slate-800">{title || 'Título del Producto'}</h4> {/* Título */}
        <p className="text-base text-slate-600 mt-4 font-light">{description || 'Descripción del producto.'}</p> {/* Descripción */}
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7"> {/* Contenedor del botón */}
        <button 
          className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
          type="button" 
          aria-label={`Añadir ${title} al carrito`}
        >
          Añadir al Carrito {/* Texto del botón */}
        </button>
      </div>
    </div>
  );
}

// Definición de PropTypes
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
