"use client";

import { useState } from 'react',
import Image from "next/image";
import styles from "./page.module.css";
import ChangeMessage from './components/ChangeMessage';

export default function Home() {
  const [changemessage, setChangeMessage] = usestate<ChangeMessage> ({
    showMessage:false,
  });


  return (
    <div>
      <button onClick={() => showMessage? 'Show Message':'Hide Message'}></button>
    </div>
    
  );
}
