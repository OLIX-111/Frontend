import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface FiltrosProps {
  filtroActual: string;
  setFiltro: (filtro: string) => void;
  vistaActual: 'libros' | 'autores';
  setVista: (vista: 'libros' | 'autores') => void;
}

export const Filtros: React.FC<FiltrosProps> = ({ 
  filtroActual, 
  setFiltro, 
  vistaActual, 
  setVista 
}) => {
  const filtros = [
    { id: 'todos', label: 'Todos' },
    { id: 'disponibles', label: 'Disponibles' },
    { id: 'no-disponibles', label: 'No Disponibles' },
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 rounded-lg ${
            vistaActual === 'libros' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setVista('libros')}
        >
          Libros
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            vistaActual === 'autores' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setVista('autores')}
        >
          Autores
        </button>
      </div>

      {vistaActual === 'libros' && (
        <div className="flex items-center gap-4">
          <Filter className="w-6 h-6 text-indigo-600" />
          <div className="flex gap-2">
            {filtros.map((filtro) => (
              <motion.button
                key={filtro.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFiltro(filtro.id)}
                className={`px-4 py-2 rounded-full ${
                  filtroActual === filtro.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filtro.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};