import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Product from "./components/Product";

const app () => [Product] = {
    name:'Freio de mão';
    price:50;
    description:'Serve na linha fiat';
    category:'Freios';
    inStock:true;    
  }
}

export default function Home() {
  return (
    <>
      <button>Clique aqui</button>
    </>
  );
}
