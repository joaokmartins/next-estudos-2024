"use client";

import { useState } from 'react';
import styles from './todolist.module.css'

interface Task = {
    id:number;
    decription:string;
};

export default function todolist() {
  const [myTask, setMyTask] = useState<Task> (['']);
  const [myList, setMyList] = useState<string[]> ('');

  const handleChangeList = (e:React.ChangeEvent<HTMLInputElement>) => {
    {value} = e.target;
    setMyTask((prevState)=>...prevState);

  }
  
  const handleSubmitButton = 
  alert('Você adicionou a tarefa!')
  alert('Você editou a tarefa!')
  alert('Você removeu a tarefa!')

  const AddTask = 
  trim(handleChangeList)
  setmyTask();
  setmyList();

  const editTask=

 // Função para remover uma tarefa da lista
 const removeTask = (id: number) => {
  setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  setFeedbackMessage('Tarefa removida!');
};
  return(
  <div className='styles'>
    <input className='styles'
    type='text'
    onChange={handleChangeList}
    value={Task.id}>
    
    </input>

    <div className='styles'>
    <input className='styles'
    type='text'
    onChange={handleChangeList}
    value={Task.description}>
    
    </input>

    <button className="styles">


    </button>


  </div>



  );
};