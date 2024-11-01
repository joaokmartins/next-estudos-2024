"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import UserProfile from './components/UserProfile';

export default function Home() {
  const [userprofile, setUserProfile] = useState<UserProfile> ({
    userId:4,
    username:'Joaquim Valente Junior',
    email:'joaquim@vb.com',
    bio:'Filho da lenda', 
    isAdmin:true,
  });

  return (
    <div>
      <h2>Perfil do usuário</h2>
      <p><strong>Id do usuário:</strong>{userprofile.userId}</p>
      <p><strong>Nome do usuário:</strong>{userprofile.username}</p>
      <p><strong>Email:</strong>{userprofile.email}</p>
      <p><strong>Bio do usuário:</strong>{userprofile.bio}</p>
      <p><strong>É administrador:</strong>{userprofile.isAdmin? 'Sim':'Não'}</p>
      <input 
      type:text
      {userprofile.name}
      {userprofile.isAdmin:! 'Não é o administrador': 'É o administrador'}
      ></input>
    </div>
  );
}
