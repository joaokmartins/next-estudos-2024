"use client";

import React from "react";
import styles from "@/styles/Home.module.css"; // Certifique-se de que o caminho está correto

export default function Home() {
  return (
    <div>
      {/* Use a classe CSS importada a partir do módulo de estilos */}
      <h1 className={styles['highlighted-text']}>Hello, CSS World!</h1>
    </div>
  );
}