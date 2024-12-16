import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Autor } from '../types';

interface AutorCardProps {
  autor: Autor;
}

export const AutorCard: React.FC<AutorCardProps> = ({ autor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <User className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{autor.nombre}</h3>
      <p className="text-gray-600">Nacionalidad: {autor.nacionalidad}</p>
    </motion.div>
  );
};
