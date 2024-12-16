import { useState, useEffect } from 'react';
import { Autor } from '../types';
import { getAutores } from '../services/api';

export const useAutores = () => {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarAutores = async () => {
      try {
        setCargando(true);
        setError(null);
        const data = await getAutores();
        if (data.length === 0) {
          setError('No hay autores disponibles');
          return;
        }
        setAutores(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error desconocido al cargar los autores');
        }
        console.error('Error en useAutores:', err);
      } finally {
        setCargando(false);
      }
    };

    cargarAutores();
  }, []);

  const getAutorPorId = (autorId: number) => {
    return autores.find((autor) => autor.id === autorId);
  };

  return { autores, cargando, error, getAutorPorId };
};