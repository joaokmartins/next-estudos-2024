"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import PasswordGenerator from './components/PasswordGenerator';

export default function Home() {

  const [password, setPassword] = useState<PasswordGenerator> ({
      password:0,
  });

  const handlePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = parseFloat(e.target.value);
    setPassword(prev => ({ ...prev, password: isNaN(password.length) > 8 && < 20 : password }));
  };

  const handlePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = parseFloat(e.target.value);
    setPassword(prev => ({ ...prev, password: isNaN(password.length) > 8 && < 20 : password }));
  };

  return (
   <div>
    <input
    type='number'
    value={password.password}
    onChange={handlePasswordLength}
    placeholder='Lugar da senha'>
    </input>
   </div>
  );
}
