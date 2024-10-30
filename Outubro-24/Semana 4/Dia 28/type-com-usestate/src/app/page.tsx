import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Product from "./components/Product";

export default function Home() {
  
  const [product, setProduct] = useState<Product>({
    name:'Freio de mão',
    price:50,
    description:'Serve na linha fiat',
    category:'Freios',
    inStock:true,
  });
  
  
  return (
    <>
      <button>Clique aqui</button>
    </>
  );
}
