import { useState } from 'react';
import { Header } from './components/Header';
import { Filtros } from './components/Filtros';
import { LibrosGrid } from './components/LibrosGrid';
import { AutoresGrid } from './components/AutoresGrid';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { useLibros } from './hooks/useLibros';
import { useAutores } from './hooks/useAutores';

function App() {
  const [filtro, setFiltro] = useState('todos');
  const [vista, setVista] = useState<'libros' | 'autores'>('libros');
  
  const { libros, cargando: cargandoLibros, error: errorLibros } = useLibros(filtro);
  const { autores, cargando: cargandoAutores, error: errorAutores, getAutorPorId } = useAutores();

  const error = errorLibros ?? errorAutores;
  const cargando = cargandoLibros || cargandoAutores;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Filtros 
          filtroActual={filtro} 
          setFiltro={setFiltro}
          vistaActual={vista}
          setVista={setVista}
        />
        
        {error && <ErrorMessage message={error} />}
        
        {cargando ? (
          <LoadingSpinner />
        ) : (
          vista === 'libros' ? (
            <LibrosGrid libros={libros} getAutorPorId={getAutorPorId} />
          ) : (
            <AutoresGrid autores={autores} />
          )
        )}
      </div>
    </div>
  );
}

export default App;