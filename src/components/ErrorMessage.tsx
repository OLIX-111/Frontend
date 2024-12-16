import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center justify-center p-4 mb-6 bg-red-50 text-red-700 rounded-lg border border-red-200"
    >
      <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
      <span className="text-sm">{message}</span>
    </motion.div>
  );
};