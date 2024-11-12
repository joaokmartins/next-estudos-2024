"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

type MotivationalPhrase = {
  id: number;
  text: string;
  style: 'success' | 'warning' | 'danger';
  generatedAt: Date;
}

export default function Home() {
  const [motivation, setMotivation] = useState<MotivationalPhrase> ({
    id:0123456789;
    text:['Não fique triste', 'A hora é agora', 'Vamos vencer', 'Quero você no topo'];
    style:'success' | 'warning' | 'danger';
    generatedAt: Date;
  });

  const handleMotivationalPhrase = () => {
    setMotivation(Math.random(id, text, style, generatedAt));
  }

  return (
    <div>
      <button onClick={handleMotivationalPhrase}>

      </button>
    </div>
  );
}
