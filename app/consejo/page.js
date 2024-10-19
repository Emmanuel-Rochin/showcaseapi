'use client'; 

import { useState, useEffect } from 'react';

const ConsejoComponent = () => {
  const [advice, setAdvice] = useState(null);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    fetchAdvice(); 
  }, []);

  return (
    <div className="text-center p-5 border-2 border-green-500 rounded-lg bg-gray-100 shadow-md max-w-md mx-auto">
      <h1 className="text-2xl text-black font-bold mb-4">API de Consejos</h1>
      {advice ? <p className="text-black italic mb-4">{advice}</p> : <p className="text-black">Cargando consejo...</p>}
      <button 
        onClick={fetchAdvice} 
        className="bg-green-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-green-600"
      >
        Obtener Nuevo Consejo
      </button>
    </div>
  );
};

export default ConsejoComponent;