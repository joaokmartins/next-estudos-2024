import React from "react";
import { Tasks } from "../Data/Tasks";
import { Task } from "../interfaces/Task";

// Importar a interface para usar como props
interface TaskProps {
  id: ;
  title: ;
  description: ;
  completed: ;
} 

export default function TaskList() {

  // Criar componente para filtrar tarefas não concluídas e um método map para iterar sobre as tarefas filtradas
  const FiltrareExibirTarefas = (TaskProps[]) => {
    // Filtrar tarefas não concluídas 
    const filteredTasks = Tasks.filter(Tasks => Tasks.completed === false);
    
    // Método map para selecionar as tarefas filtradas e renderizar cada tarefa em uma lista
    return (
    <ul>
      {filteredTasks.map((Task) ( 
      <li key={completed}>
        Tarefas incompletas {Tasks}
      </li>

    ))}
    </ul>
    )

  }
}