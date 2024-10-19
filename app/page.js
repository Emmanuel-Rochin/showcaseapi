'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  
  // useState y setApiDat
  const [apiData, setApiData] = useState([]);

  //UseEffect: Aqui carga los datos.
  useEffect(() => {
    
    const loadApiData = () => {
      const apis = [
        { href: '/consejo', nombre: 'Consejo', texto: 'API de Consejos' },
        { href: '/gato', nombre: 'Gato', texto: 'API de Gatos' },
        { href: '/perro', nombre: 'Perro', texto: 'API de Perros' },
      ];
      setApiData(apis);
    };

    loadApiData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Lista de APIs</h1>
        <ul className="space-y-4">
          {apiData.map((api) => (
            <li key={api.nombre}>
              <Link href={api.href} className="block p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center no-underline">
                <span className="inline-block w-6 h-6 mr-4 text-blue-500 text-center font-bold border-2 border-blue-500 rounded-full">
                  {api.nombre[0]}
                </span>
                <span className="text-gray-800 font-medium">{api.texto}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}