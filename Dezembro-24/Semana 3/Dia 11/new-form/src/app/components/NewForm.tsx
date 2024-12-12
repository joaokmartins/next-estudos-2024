"use client";

import { useState } from 'react';

type FormState = {
    username=string;
    email=string;
    message=string;
};

export default function NewForm = {
  const [items, setItems] = useState<FormState[]> ([]);

  const [newItem, setNewItemName] = useState<string[]> (''); 

  const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewRegister(e.target);
  };

// Função para adicionar um novo item à lista
const handleAddItem = () => {
  if (newItemName.trim()) { // Verifica se o nome do item não está vazio
    const newItem: FormState = {
      id: Date.now(), // Gera um ID único usando a data/hora atual
      name: newItemName,
      purchased: false, // Inicialmente não comprado
    };
    setItems([...items, newItem]); // Adiciona o novo item à lista
    setNewItemName(''); // Limpa o campo de entrada
  }
};

  const handleSubmit = {
    if 
    
    alert(`O email digitado está corrreto: ${items.email}`)
  };

    return (
      <div>
        <Form onSubmit>
          <input
          type='text'
          value='items.username'
          onChange={handleSubmit}
          placeholder='insira seu nome'>
          
          </input>

          <input
          type='text'
          value='items.email'
          onChange={handleSubmit}
          placeholder='insira seu email'>
          
          </input>

        <button type='submit'>

        </button>

        </Form>

      </div>


    );
};