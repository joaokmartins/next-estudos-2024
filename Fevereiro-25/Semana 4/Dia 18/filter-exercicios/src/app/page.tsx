"use client";
import React from "react";

export default function IndexPage() {
  const names = ["Marcelo", "Mada", "Gibraltar", "Genoveva", "Carlos", "Romário"];

  // Componente para filtrar e exibir nomes
  const FilteredNamesList = () => {
    // 1. Filtragem dos nomes
    const filteredNames = names.filter((name) => name.length > 4);

    // 2. Renderização da lista
    return (
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>
            {name} - {name.length} caracteres
          </li>
        ))}
      </ul>
    );
  };

  // 3. Estrutura principal da página
  return (
    <div>
      <h1>Nomes com mais de 4 letras</h1>
      <FilteredNamesList />
    </div>
  );
}