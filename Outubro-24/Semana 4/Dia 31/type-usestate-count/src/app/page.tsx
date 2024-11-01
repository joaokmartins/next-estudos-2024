"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Count from './components/Count';

export default function Home() {
  const [count, setCount] = useState<Count> ({
    InitialCount:0;
  });

  handleincrementcounter () => setCount {InitialCount + 1};
  handledecrementcounter () => secount{InitialCount -1};
  handlecounterToogle () => setCount {};

  return (
    <div>
      <h3>Contador</h3>
      <button handleincrementcounter>+</button>
      <button handledecrementcounter>-</button>
    </div>
  );
}
