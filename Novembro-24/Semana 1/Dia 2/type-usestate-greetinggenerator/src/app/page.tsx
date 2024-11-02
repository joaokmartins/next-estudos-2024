"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Greeting from './components/Greeting';

export default function Home() {
  const [greeting, setNewGreeting] = useState<Greeting> ({
    name:'',
    timeoftheday:'',
  });

  function HandleName = setNewGreeting{(name) => "" };
  function handleTimeoOfTheDay = setNewGreeting{(timeoftheday) => ""};

  return (
    <div>
      <input
      type='text'
      value={greeting.name}
      onChange=
      placeholder?='Coloque aqui o nome'
      ></input>
    <button onClick={handleName}>Escolha o nome:</button>
    <button onClick={handleTimeoOfTheDay}>Dia</button>
    <button onClick={handleTimeoOfTheDay}>Tarde</button>
    <button onClick={handleTimeoOfTheDay}>Noite</button>
    </div>
  );
}
