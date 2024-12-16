import React from "react";
import { AutorCard } from "./AutorCard";
import { Autor } from "../types";

interface AutoresGridProps {
  autores: Autor[];
}

export const AutoresGrid: React.FC<AutoresGridProps> = ({ autores }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {autores.map((autor) => (
        <AutorCard key={autor.id} autor={autor} />
      ))}
    </div>
  );
};
