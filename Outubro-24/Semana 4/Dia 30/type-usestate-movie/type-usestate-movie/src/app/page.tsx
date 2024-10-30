"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Movie from './Component/Movie';

export default function Home() {
  const [movie, setMovie] = useState<Movie> ({
    title:'O Vendedor de Sonhos',
    director:'Alexandre Padilha',
    year:1998,
    genre:'Drama',
    avaiable:true,
  });

  return (
    <div>
    <h3>Filmes</h3>
    <p><strong>Titulo:</strong>{movie.title}</p>
    <p><strong>Diretor:</strong>{movie.director}</p>
    <p><strong>Ano:</strong>{movie.year}</p>
    <p><strong>Gênero:</strong>{movie.genre}</p>
    <p><strong>Disponível</strong>{movie.avaiable ? 'Sim':'Não'}</p>
    <button onClick={() =>setMovie({...movie, avaiable:!movie.avaiable})}>
      {movie.avaiable ? 'Marcar como disponível' : 'Marcar como indisponível'}
      </button>
    </div>
  );
}
