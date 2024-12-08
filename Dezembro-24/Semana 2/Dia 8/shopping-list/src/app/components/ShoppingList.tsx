"use client";

import { useState } from 'react';

type Items = {
    id:number;
    itemname:string;
    purchased:boolean;
};

export default ShoppingList() {
  const [newItemText, setNewItemText] = useState<Items[]>([]);
  const [itemlist, setItemList] = useState<string>('');

  const handleChangeItemName = (e:ChangeEvent<HTMLInputElement>) => {
    itemname = e.target;
  };

  const handleChangeButton = setNewItemText();

  const handleAddItem = () => {
    if (newItemText.trim()) {
      const newItem = {
        id: Date.now(), // Gera um ID único usando o timestamp atual
        name: newItemText, // Usa o texto do estado para o nome do item
        purchased: false, // Define o status inicial como não comprado
      };
  
      // Atualiza a lista de itens adicionando o novo item
      setItemsList([...itemsList, newItem]);
  
      // Limpa o campo de entrada
      setNewItemText('');
    }
  };

  const RemoveItem = (newItemText - !newItemText);


  return (
    <div>
      <input
      type='text'
      value={newItemText.itemname}
      onChange={handleChangeItemName}
      placeholder='Insira o item aqui'
      >
    
      </input>

      <button onClick='handleAddItem'>
      Adicionar
      </button>

    </div>

  )
};