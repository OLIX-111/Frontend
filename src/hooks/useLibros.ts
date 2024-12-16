import { useState, useEffect } from 'react';
import { Libro } from '../types';
import { getLibros, getLibrosDisponibles, getLibrosNoDisponibles } from '../services/api';

export const useLibros = (filtro: string) => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarLibros = async () => {
      try {
        setCargando(true);
        setError(null);
        
        let data: Libro[];
        switch (filtro) {
          case 'disponibles':
            data = await getLibrosDisponibles();
            break;
          case 'no-disponibles':
            data = await getLibrosNoDisponibles();
            break;
          default:
            data = await getLibros();
        }
        setLibros(data);
      } catch (err) {
        setError('Error al cargar los libros');
        // Safe error logging
        if (err instanceof Error) {
          console.error('Error al cargar los libros:', err.message);
        } else {
          console.error('Error desconocido al cargar los libros');
        }
      } finally {
        setCargando(false);
      }
    };

    cargarLibros();
  }, [filtro]);

  return { libros, cargando, error };
};