"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Task from './components/task';

export default function Home() {
  const [task, setTask] = useState<Task> ({
    id:3,
    title:'Nova Tarefinha',
    description:'Anotar nomes do casamento Joaquim Valente',
    dueDate:2024/10/20,
    completed:true, 
  });

  return (
    <div>
    <h3>Minha tarefa</h3>
    <p><strong>Identificador:</strong>{task.id}</p>
    <p><strong>Título:</strong>{task.title}</p>
    <p><strong>Descrição:</strong>{task.description}</p>
    <p><strong>Data de vencimento atual:</strong>{task.dueDate}</p>
    <p><strong>Atividade completa</strong>{task.completed ? 'Sim':'Não'}</p>
    <button onClick={() => setTask({ ...task, completed=!task.completed})}>
      {task.completed? 'Tarefa não concluída':'Tarefa concluída'}
    </button>
    </div>
  );
}
