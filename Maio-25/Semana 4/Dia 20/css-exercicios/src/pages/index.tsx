"use client";

import React from "react";
import styles from "@/styles/Home.module.css"; // Certifique-se de que o caminho está correto

export default function Home() {
  return (
      <div>
        <form>
          <input type="text" className={styles.forminput} placeholder="Your Name"/>
          <input type="email" className={styles.forminput} placeholder="Your Email"/>
          <button type="submit" className={styles.submitbutton}>Submit</button>
          </form>         
      </div>
  );
}