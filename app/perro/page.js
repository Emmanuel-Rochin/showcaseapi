'use client'; // Componente del lado del cliente

import { useState, useEffect } from 'react';

const PerroComponent = () => {
  const [dogImage, setDogImage] = useState(null);

  const fetchDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImage(data.message));
  };

  useEffect(() => {
    fetchDogImage(); 
  }, []);

  return (
    <div className="flex flex-col items-center p-6 border-2 border-blue-500 rounded-lg bg-gray-50 shadow-md max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">API de Perros</h1>
      {dogImage ? (
        <img 
          src={dogImage} 
          alt="Perro Aleatorio" 
          className="w-full h-auto rounded-lg mb-4"
        />
      ) : (
        <p>Cargando imagen de perro...</p>
      )}
      <button 
        onClick={fetchDogImage} 
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Obtener Nueva Imagen de Perro
      </button>
    </div>
  );
};

export default PerroComponent;