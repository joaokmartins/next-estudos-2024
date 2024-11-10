"use client";

import{ useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

type PasswordButton = {
  pass:string;
}

const initialPassword [thePassowrd, setInitialPassword]= () => ({
    pass:'';  
});

const handlePasswordGenerator = () => ({
  {MathRandom(pass.initialPassword(* 10))};

});

export default function Home() {
  return (
    <div>
      <button onClick={handlePasswordGenerator}>
        Crie uma nova senha!
      </button>
    </div>
  );
}
