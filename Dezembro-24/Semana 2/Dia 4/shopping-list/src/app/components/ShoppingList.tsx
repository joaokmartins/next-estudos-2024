"use client";

import { useState } from 'react';

type ShoppinListState = {
    id:number;
    itemlist:string;
    itemstate:boolean;
}

export default function ShoppingList() {
  const [liststate, setListState] = useState<ShoppinListState[]>([]);

  const [newItemList, setNewItemList] = useState<string>('');

  const handleChangeItem = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setNewItemList(value)
  };

  
  const addItem = () => {
    if (newItemList.trim()) {
      const newListItem: ShoppinListState = {
        id: Date.now(), // Gera um ID único usando a data/hora atual
        itemlist: newitemlist, // Nome da tarefa a partir do valor do campo de entrada
        itemstate: '', // Descrição vazia por enquanto
      };
      setListState([...listState, newListItem]); // Adiciona a nova tarefa à lista de tarefas
      setNewTask(''); // Limpa o campo de entrada após adicionar a tarefa
    }
  };

      return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleChangeTask}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {listState.map(task => (
          <li key={task.id}>
            {task.taskname}
            {/* Botão para remover uma tarefa da lista */}
            <button onClick={() => setListState(listState.filter(item => item.id !== task.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}