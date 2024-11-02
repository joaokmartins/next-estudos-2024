"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import SimpleTask 

export default function Home() {
  const [list, setNewList] = useState<SimpleTaskList> ({
    Lists:{
      name:'',
      description:'',
    }
    
  });

  const addList = setNewList(Lists)
  }

  return (
    
  );
}
