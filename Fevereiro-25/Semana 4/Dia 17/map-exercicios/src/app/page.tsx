// pages/index.tsx

"use client";

import React from 'react';

const IndexPage: React.FC = () => {
    // Livros publicados
    const books = [
        { ano: 2020, titulo: "Segredos" },
        { ano: 1993, titulo: "Clube da luta" },
        { ano: 1899, titulo: "Maraccaibo" },
        { ano: 2001, titulo: "Amanhã é um novo dia" }
    ];

    // Filtrar títulos de livros publicados após o ano 2000 e capitalizar o primeiro caractere de cada palavra.
    const FiltrarLivrosECapitalizar = () => {
        // Filtrar livros publicados após o ano 2000
        const livrosFiltrados = books.filter(livro => livro.ano > 2000);

        // Capitalizar o primeiro caractere de cada título
        const capitalizarTitulo = (titulo: string) => {
            return titulo.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        };
        
        // Criar lista de livros capitalizados
        return livrosFiltrados.map((livro, index) => (
          <li key={index}>
            Livro: {capitalizarTitulo(livro.titulo)}
          </li>
        ));
    }

    return (
      <div>
        <h1>Resultado da Lista de Livros a Partir de 2000</h1>
        <ul>
          {FiltrarLivrosECapitalizar()}
        </ul>
      </div>
    );
}

export default IndexPage;