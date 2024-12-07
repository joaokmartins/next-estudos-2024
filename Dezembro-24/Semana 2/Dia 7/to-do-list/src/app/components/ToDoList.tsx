"use client";

import { useState } from 'react';

type TodoListState = {
    id:number;
    description:string;
    status:boolean;
};

export default function ToDoList() {
  const [liststate, setListState] = useState<string[]>([]);

  const [itemlist, newItemList] = useState<string[]>([]);

  const handleChangeId = (e.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    value = liststate.id;
  };

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  return (
    <div>

      <input 
      name="id"
      value={liststate.id}
      onChange={handleChangeId}
      type='text'
      placeholder='Digite o id da tarefa'>
      </input>

      <button onClick={handleAddTask}>
        Adicionar tarefa
      </button>

      <button onClick={handleDeleteTask}>
        Remover tarefa
      </button>
    </div>

  )
}