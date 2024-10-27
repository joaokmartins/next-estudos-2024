import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

type Book = {
  title:string;
  author:string;
  pages:number; 
  category:string;
  }

type Author = {
  name:string;
  country:string;
  category:string;
}  

type Bookcategory = {
  category:string;
}

type library = {
  <>Book</> 
  <>Author</>
  <>Bookcategory</>
}

export default function Home() {

  }
}
