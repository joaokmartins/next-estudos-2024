"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import AdvancedCounter from './components/AdvancedCounter';

export default function Home() {
  const [advancedcounter, setAdvancedcounter] = useState<AdvancedCounter> ({
    count:0,
    step:1,
    isEven:true,
  });

  const incrementCount = ({setCount} + 1);
  const decrementCount = ({setCount} - 1);

useEffect = [({AdvancedCounter if })];

  return (
   <div>
    <button onClick={incrementCount}>
    +</button>
    <button onClick={decrementCount}>
    -
    </button>
    <input
    type='number'
    value='0'
    onchange={advancedcounter.step}
    placeholder='Altere o incrementador aqui'
    ></input>
   </div>
  );
}
