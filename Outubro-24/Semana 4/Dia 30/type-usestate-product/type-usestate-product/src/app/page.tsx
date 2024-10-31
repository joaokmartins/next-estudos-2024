"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Product from './components/Product';

export default function Home() {
  const [product, setProduct] = useState<Product> {(
    name:'cabo de freio',
    price:10,
    description:'Serve em modelos fiat mobi e uno',
    category:'Freios',
    inStock:true,
  )};


  return (
    <div>
      <h3>Cadastro Somma</h3>
      <p><strong>Nome:</strong>{product.name}</p>
      <p><strong>Preço:</strong>{product.price}</p>
      <p><strong>Descrição:</strong>{product.description}</p>
      <p><strong>Categoria:</strong>{product.category}</p>
      <p><strong>Em estoque</strong> {inStock? 'Sim' : 'Não'}</p>
      <button onClick={() => setProduct[( ...product, inStock) ]}>'Disponibilizar Estoque'</button>
    </div>
  );
}
