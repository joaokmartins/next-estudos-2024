"use client";

import { useState } from 'react';

interface Items {
  name:'string';
}

export default function wishlist() {
  const [myItems, setMyItems] = useState<Items> ({''});
  const [myList, setMyList] = useState<Items> ({''});
  const [feedbackmessage, myFeedbackMessage] = alert('');

  function handleChangeMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    {value} = e.target;
    setMyItems((prevState) => {(
      ...prevState
    )})  
  };

  const AddNewItem = 
  if(myItems.name.length === trim) {
      myFeedbackMessage(alert('Novo item adicionado.')
    );  
  } 

  else {
    myFeedbackMessage('Insira um item válido.')  
  }

  // Limpa o campo de entrada e o estado da nova tarefa
  setNewTaskName('');
  setFeedbackMessage('Tarefa adicionada!');
};

// Função para remover uma tarefa da lista
const removeTask = (id: number) => {
  // Filtra a lista para remover a tarefa com o ID especificado
  setMyList((prevList) => prevList.filter((task) => task.id !== id));
  setFeedbackMessage('Tarefa removida!');
};
  
const editTask = 

  return(

    <div className='type'>
      <input className='type'
      type='text'
      onChange={handleChangeMessage}
      value='name'></input>

    <button onClick={AddNewItem}>Adicionar novo item</button>
    <button onClick={removeTask}>Remover item</button>
    <button onClick={editTask}>Editar item</button>

    </div>

  )
}