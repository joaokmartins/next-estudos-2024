"use client",

import { useState } from 'react',
import Image from "next/image";
import styles from "./page.module.css";
import Product from './components/Product';

export default function Home() {
  const [product, setProduct] = useState<Product> ({
    productId:4,
    productName:'Cabo de acelerador Fusca',
    description:'Serve na linha vw',
    price:59,
    quantityInStock:100,
  });

  return (
    <div>
      <p><strong>ID do produto:</strong>{product.productId}</p>
      <p><strong>Nome do produto:</strong>{product.productName}</p>
      <p><strong>Descrição do produto:</strong>{product.description}</p>
      <p><strong>Preço do produto:</strong>{product.price}</p>
      <input {product.price}>Mudar preço do produto</input>
      <p><strong>Quantidade em estoque:</strong>{product.quantityInStock}</p>
      <input {product.quantityInStock}>Mudar quantidade do produto</input>
    </div>
  );
}
