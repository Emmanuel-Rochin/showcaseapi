'use client'; // Componente del lado del cliente

import { useState, useEffect } from 'react';

const GatoComponent = () => {
  const [catImage, setCatImage] = useState(null);

  const fetchCatImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => setCatImage(data[0].url));
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 border-2 border-orange-500 rounded-lg bg-gray-50 shadow-md max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-orange-500 mb-4">API de Gatos</h1>
      {catImage ? (
        <img 
          src={catImage} 
          alt="Gato Aleatorio" 
          className="w-full h-auto rounded-lg mb-4" 
        />
      ) : (
        <p>Cargando imagen de gato...</p>
      )}
      <button 
        onClick={fetchCatImage} 
        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
      >
        Obtener Nueva Imagen de Gato
      </button>
    </div>
  );
};

export default GatoComponent;