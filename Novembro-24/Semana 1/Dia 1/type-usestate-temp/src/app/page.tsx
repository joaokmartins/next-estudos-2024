"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Temp from './components/Temp';

export default function Home() {
  const [temp, setTemp] = useState<Temp> ({
    temp:0,
  });

  const [temp, setTemp] = useEffect<Temp> ({
    temp:0,
  });

  return (
    <div>
      <input
      {temp.temporizador}
      ></input>
      <button onClick={() => setTemp({... temp,}) }>Iniciar</button>
      <button onClick={() => setTemp({... temp,}) }>Pausar/Continuar</button>
    </div>
  );
}
