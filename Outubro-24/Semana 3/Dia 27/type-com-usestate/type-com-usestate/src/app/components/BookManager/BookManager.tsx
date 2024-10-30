import React, { useState } from 'react';
import { Book } from './types';

const BookManager = () => {
  // Inicializa o estado do livro com valores padrão
  const [book, setBook] = useState<Book>({
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasia',
  });

  return (
    <div>
      <h1>Gerenciador de Livros</h1>
      <p><strong>Título:</strong> {book.title}</p>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Ano:</strong> {book.year}</p>
      <p><strong>Gênero:</strong> {book.genre}</p>
    </div>
  );
};

export default BookManager;