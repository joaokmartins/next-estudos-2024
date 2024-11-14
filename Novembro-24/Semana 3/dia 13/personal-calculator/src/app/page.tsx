"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  type Action = {
    id: number;
    category: 'Saúde' | 'Desenvolvimento' | 'Produtividade' | 'Emocional' | 'Relacionamentos';
    description: string;
    points: number;
    timestamp: Date;
  }
  type ProgressScore = {
    health: number;
    personalDev: number;
    productivity: number;
    emotionalWellbeing: number;
    relationships: number;
  }

  const [ActionState, setActionState] = useState<Action> ({
    id: 0;
    category: '';
    description: 'Seu score aqui'
    points: 0;
    timestamp: Date;
  })

  const ProgressScore = setActionState{[]};

  const handleProgressScore 

  return (

    <button onClick={}>
    </button>

  )
    
}
