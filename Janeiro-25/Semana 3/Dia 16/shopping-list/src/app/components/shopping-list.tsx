"use client";

import { useState } from 'react';

interface List {
  id:number,
  name:string,
}

export default function ShoppingList() {
  const [item, setMyItem] = useState<List> ({
    id:0,
    name:'',
  });

  const [myList, setMyList] = useState<string> (['']);

  function handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    {value}: e.target;
    setMyItem((prevState) =>
    ...prevState)
  };

  const [feedbackmessage, setFeedbackMessage] = ;


  const AddShoppingItem = 

    if(item.name.length > 0) {
      return
    }

    else {
      alert('Insira o item da lista.')
    }

    

    return()
};