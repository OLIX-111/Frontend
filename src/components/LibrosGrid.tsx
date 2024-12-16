import React from 'react';
import { motion } from 'framer-motion';
import { Libro, Autor } from '../types';
import { LibroCard } from './LibroCard';

interface LibrosGridProps {
  libros: Libro[];
  getAutorPorId: (id: number) => Autor | undefined;
}

export const LibrosGrid: React.FC<LibrosGridProps> = ({ libros, getAutorPorId }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {libros.map((libro) => (
        <LibroCard
          key={libro.id}
          libro={libro}
          autor={getAutorPorId(libro.autorId)}
        />
      ))}
    </motion.div>
  );
};