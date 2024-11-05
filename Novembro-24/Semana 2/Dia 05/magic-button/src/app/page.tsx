"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import MagicButton from './components/MagicButton';

export default function Home() {
  const [state, setState] = useState<MagicButton> ({
    ButtonState:'Desligado';
  });

  const handleButtonState = () => {
    if setState('Ligado') {
      else setState('Piscando')
    };

  return (
    <div>
      <button onClick={handleButtonState}>
        {setState ? true 'Ligado' : 'Piscando'}
      </button>
    </div>
  );
}
