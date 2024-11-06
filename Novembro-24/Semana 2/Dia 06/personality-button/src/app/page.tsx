"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import { PersonalityButton } from './types/PersonalityButton';

export default function Home() {
  const [button, setButton] = useState<PersonalityButton> ('Líder');

  const handleChangePersonality = () => {
    setButton(prev state + 1)
    setButton('Criativo'| 'Analítico'| 'Sociável'| 'Aventureiro')
  }

  return (
    <div>
      <button onClick={handleChangePersonality}>Altere aqui sua personalidade!</button>
    </div>
  );
}
