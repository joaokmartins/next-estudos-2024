"use client",

import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import AdjustableCounter from './components/AdjustableCounter';

export default function Home() {

  const [count, setCount] = useState<AdjustableCounter> ({
    initialCount:0,
    Pace:[''],
  });

  const incrementCount = setCount prev {initialCount + Pace};
  const decrementCount = setCount prev {initialCount - Pace};

  const displayCount = {console.log:''}
  useEffect = {() => document.initialCount}

  return (
    <div>
      <h3>Contador com Passo Ajustável</h3>
    <button onClick={incrementCount}>+</button>
    <button onClick={decrementCount}>-</button>
    <input
    type="text"
    value={Pace}
    placeholder='Coloque o passo aqui'>
    </input>
    </div>
  );
}
