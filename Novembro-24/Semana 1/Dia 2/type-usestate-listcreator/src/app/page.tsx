"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import ListCreator from './components/ListCreator';

export default function Home() {
  const [newList, setNewList] = useState<ListCreator> ({
    lists:[''],
    currentListIndex:0,
    newItemText:'',
  });

  const AddItems = () => 
   setNewList ({...lists, ''});

  const RemoveItems = () =>
   setNewList ({...lists, ''});

  useEffect = () => {};
  
   return (
  <div>
    <h3>Lista de usuários:</h3>
  </div>

  );
}
