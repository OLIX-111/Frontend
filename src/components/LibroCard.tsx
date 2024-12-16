import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Check, X } from 'lucide-react';
import { Libro, Autor } from '../types';

interface LibroCardProps {
  libro: Libro;
  autor: Autor | undefined;
}

export const LibroCard: React.FC<LibroCardProps> = ({ libro, autor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        {libro.disponible ? (
          <span className="flex items-center text-green-600">
            <Check className="w-5 h-5 mr-1" />
            Disponible
          </span>
        ) : (
          <span className="flex items-center text-red-600">
            <X className="w-5 h-5 mr-1" />
            No disponible
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{libro.titulo}</h3>
      <p className="text-gray-600">
        Autor: {autor?.nombre ?? 'Desconocido'}
      </p>
      <p className="text-gray-500 text-sm">
        Nacionalidad: {autor?.nacionalidad ?? 'Desconocida'}
      </p>
    </motion.div>
  );
};