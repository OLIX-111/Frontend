import React from 'react';
import { motion } from 'framer-motion';
import { Library } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <Library className="w-10 h-10 text-indigo-600" />
        <h1 className="text-4xl font-bold text-gray-800">Biblioteca Digital</h1>
      </div>
      <p className="text-gray-600">Explora nuestra colección de libros</p>
    </motion.div>
  );
};