"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import BMICalculator from './components/BMICalculator';

export default function Home() {
  const [calc, setCalc] = useState<BMICalculator> ({
    peso:0,
    altura:0,
  });

  const handleCalc = {setCalc(...calc, setCalc?) => 
  {calc.peso % calc.altura * calc.altura}
  };
  
  return (
    <div>
      <input
    type='number'
    value='number'
    onChange={calc.peso}
    placeholder='Coloque aqui o peso'
    >
    </input>
    <input
    type='number'
    value='number'
    onChange={calc.altura}
    placeholder='Coloque aqui a altura'
    >
    </input>

    <button onClick={handleCalc}>
    Calcule o IMC.  
    </button>
    </div>
  );
}
