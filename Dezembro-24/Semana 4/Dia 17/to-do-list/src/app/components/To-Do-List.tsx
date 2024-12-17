"use client";

import { useState } from 'react';
import To-Do-List from './To-Do-List.module.css';

type List = {
    listname:string;
};

export default function To-Do-List() {
    const [item, setItem] = useState<List[]> ([]);
    const [mylist, setMyList] = useState<string> ('');

    handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
      {value} = e.target;
      setItem(...prevState (prevState) => 
      );

    };


    addItem = {(trimm...)

      setItem()
      setMyList()
    };

    handleSubmitButton = { 
      if () {
        alert(`Tarefa adicionada`)
    }
      if () {
        alert(`Tarefa removida`)
      };
    
    RemoveItem =

    return (

      <div>
        <input
        name='listname'
        value={List.listname}
        onChange={handleChangeName}
        type='text'
        placeholder='Insira a nova lista aqui'
        >

        <button onClick={handleSubmitButton}>

        </button>
        
        </input>
      
      </div>

    )
}