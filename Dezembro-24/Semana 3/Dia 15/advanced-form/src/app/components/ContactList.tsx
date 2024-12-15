"use client";

import { useState } from 'react';

const [Items, setItems] = useState<NewForm> ({
    username:'';
    email:'';
});

const [newItemName, setNewItemName] = useState<string> ('');

const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) {
  {value} = e.target;
  ...prevState(prevState () =>) 
};

 // Função para adicionar um novo item à lista
 const handleAddItem = () => {
  if (newItemName.trim()) { // Verifica se o nome do item não está vazio
    const newItem: NewForm = {
      username: newItemName,
      email: '',
    };
    setItems([...items, newItem]); // Adiciona o novo item à lista
    setNewItemName(''); // Limpa o campo de entrada
  }
};

export default function AdvancedForm = {

  return (
    <div>
      <Form onSubmit>
        <input
        type='text'
        name='username'
        value={username}
        onChange={handleChangeName}
        placeholder='Insira seu nome aqui'
        >
        </input>

        <input
        type='text'
        name='email'
        value={email}
        onChange={handleChangeName}
        placeholder='Insira seu email aqui'
        >
        </input>

        <button type='submit'>Adicionar</button>

      </Form>
    </div>

  )
};

