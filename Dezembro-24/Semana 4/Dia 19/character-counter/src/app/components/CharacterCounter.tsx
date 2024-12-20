"use client";

import { useState } from 'react';

type Character = {
    input:string;
};

export default function CharacterCounter() {
  const [myCounter, setMyCounter] = useState<Character> {
    input:'';  
  };   

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) {
    setMyCounter((prevState) => ...prevState)
    {value} = e.target;
  };


  return (
    <div className=''>
      <input className=''
      type='text'
      value={myCounter.input}
      onChange={handleChangeInput}
      placeholder='Insira seu texto aqui'>
      
      </input>

    </div>
  )
}