import axios, { AxiosError } from 'axios';
import { Autor, Libro } from '../types';

const BASE_URL = 'https://oliverbackend.vercel.app/api';

const handleApiError = (error: unknown, context: string) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
      throw new Error(`No se encontraron ${context}`);
    }
    throw new Error(`Error al cargar ${context}: ${axiosError.message}`);
  }
  throw new Error(`Error inesperado al cargar ${context}`);
};

export const getAutores = async (): Promise<Autor[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/autores`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'autores');
    throw error;
  }
};

export const getLibros = async (): Promise<Libro[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/libros`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'libros');
    throw error;
  }
};

export const getLibrosDisponibles = async (): Promise<Libro[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/libros/disponibles`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'libros disponibles');
    throw error;
  }
};

export const getLibrosNoDisponibles = async (): Promise<Libro[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/libros/nodisponibles`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'libros no disponibles');
    throw error;
  }
};