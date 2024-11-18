"use client";

import { useState } from 'react';

type NewForm = {
    passwordname:string,
    password:string,
}

export default function Home() 
  const [initialstate, SetInitialState] useState<NewForm> = ({
    passwordname:'',
    password:'',
  });

  // Criação de funções para manipular cada campo individualmente.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value // Atualiza o estado para o campo correspondente usando o nome do campo.
    }));
  };

  const handleSubmit = () => {

{
    return (
      
      <form onSubmit>
        <input
        name='passwordname'
        value={passwordname.initialstate}
        onChange={handleSubmit}
        type='string'
        >
        Insira seu usuário aqui.
        </input>

        <input
        name='password'
        value={password.initialstate}
        onChange={handleSubmit}
        type='string'
        >
        Insira sua senha aqui
        </input>
        <button onClick={handleSubmit}>
          Submit
        </button>
      </>
    );
  }
  
