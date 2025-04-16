"use client";

import React from "react";
import styles from "@/styles/Home.module.css"; // Certifique-se de que o caminho está correto

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Resize the window to see the background color change.</p>
    </div>
  );
}