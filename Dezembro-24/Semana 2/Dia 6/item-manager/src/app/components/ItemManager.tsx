"use client";

import { useState } from 'react';

type Items = {
    id:number;
    itemname:string;
};

export default function ItemManager() {
    const [newItem, setNewItem] = useState<string> ('');
    const [itemsList, setItemsList] = useState<Item[]>([];)
};

const handleItemId = (e.ChangeEvent(HTMLInputElement)) => {
    const {value} = e.target;
    setNewItem((prevState) => {
        ...prevState 
    });

    value = newItem.id
};

const handleItemName = (e.ChangeEvent(HTMLInputElement)) => {
    const {value} = e.target;
    setNewItem((prevState) => {
        ...prevState
    });

    value = newItem.itemname;
};

  // Função para adicionar um novo item à lista
  const handleAddItem = () => {
    if (newItem.trim()) {
      const newItem: Items = {
        id: Date.now(), // Gera um ID único usando a data/hora atual
        itemname: newItem, // Nome do item a partir do valor do campo de entrada
      };
      setNewItem([...listState, newItem]); // Adiciona o novo item à lista de itens
      setNewItem(''); // Limpa o campo de entrada após adicionar o item
    }
  };

  const handleDeleteItem = (id. - !id );

  return (
    <div>
      <button {handleAddItem}>

      </button>

      <button {handleDeleteItem}> 

      </button>

    </div>
  )

};