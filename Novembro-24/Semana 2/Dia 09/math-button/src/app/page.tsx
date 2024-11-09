"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import { MathOperation } from './types/MathOperation';

const [randomState, setRandomState] = useState<MathOperation> ({ButtonState=0});

const [operationState, setOperationState] = useState<MathOperation> ({ButtonOperation=0});


export default function Home() {

const handleRandomState = () => {
  setRandomState{Math.Random=()}
}
  return (
  
  );
}
