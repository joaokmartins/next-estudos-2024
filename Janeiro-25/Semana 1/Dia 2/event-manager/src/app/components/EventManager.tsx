"use client";

import {useState} from 'react';

export default function EventManager() {
    const [myEvent, setMyEvent] = useState<Event> ({''});
    const [myList, setMyList] = useState<string[]> (['']);

    const [feedbackMessage, setFeedbackMessage] = useState<string[]> (['']);
    
    const handleChangeEvent = (e:React.ChangeEvent<HTMLInputElement>) => {
      {value} = e.target;
      setMyEvent((prevState) => ...prevState)  
    };

    const AddEvent = 
    if(myEvent.name.trim)
      {
        alert(feedbackMessage:'O título deve ser preenchido.');
      } 
      else if (Date)
      else if (DateFormat)
    return;

      { 
    setMyEvent()
    setMyList()
  }

    constRemoveEvent =

    constEditEvent = 


    return (

      <div className='title: Module 1.css'>
        <h1 className='Description: Module 2.css '></h1>
        <input className='container EventManager.module'
        type='text'
        onChange={handleChangeEvent}
        placeholder='Digite o evento aqui'>

        </input>

      <button onClick={handleRemoveButton} className='button.module.remove' type='submit'>Remover</button>

      <button onClick={handleEditButton} className='button.module.edit' type='submit'>Editar</button>

      </div>

    )
}