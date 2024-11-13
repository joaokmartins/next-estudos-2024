"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

type Nickname = {
  id: number;
  text: string;
  style: 'gamer' | 'cool' | 'funny';
  generatedAt: Date;
}


export default function Home() {

  const [NicknameState, setNicknameState] = useState<Nickname> ({
    id:0123456789;
    text:"";
    style: 'gamer';
    generatedAt: Date;
  });

  const NameCombinationPreffix = (
    setNicknameState(Nickname.text:['su', 'ale', 'mar', 'bar', 'bei'])
  
  const NameCombinationSuffix = (
      setNicknameState(Nickname.text:['çola', 'dete', 'de', 'net'])

  const handleNicknameGenerator = mathFloor(Math.random(NameCombinationPreffix
     && NameCombinationSuffix)) => [[]];

  return (

    <button onClick={handleNicknameGenerator}>Gere aqui seu nickname!</button>
   
  );
}
