import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [Book, SetBook] = {useState}<>Book {
    title:'Varandas da Mente',
    author:'Jose Ribeirao',
    year:1994,
    genre:'Drama',
    avaiable:true,
  }

  return (

    <div>
      <h3>Informações do Livro</h3>
      <p>{title.book}</p>
      <p>{author.book}</p>
      <p>{year.book}</p>
      <p>{genre.book}</p>
      <p>{avaiable?}</p>
      <button onClick={()=> [...Book, SetBook]} avaiable === true>Disponibilizar Livro</button>
    </div>
    
  );
}
