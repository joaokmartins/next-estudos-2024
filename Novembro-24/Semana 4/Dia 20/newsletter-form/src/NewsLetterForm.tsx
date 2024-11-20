"use client";

import { useState } from 'react';

type NewsLetterForm = {
    username:string,
    useremail:string
}

export default function EventState() {
   const [formstate, setFormState] = useState<NewsLetterForm> ({
    username:'',
    useremail:'',
 });
   const handleChange (e: Event(InputHTMLElement)) => {
    setFormState(prevEvent... formstate)  
   }
  
   const handleSubmit() => {
    alert(`'Nome do usuário':${formstate.username}, 'Email do usuário':${formstate.useremail} `);
    if (
      formstate.useremail = @;
    )
    else (
      console.log('Email inválido')
    )
   };

  return (
    <div>
      <form >
        <input 
        name='Nome do usuário'
        value='formstate.username'
        onChange={handleChange}
        type='text'
        placeholder='Insira seu nome'
        >
        </input>

        <input
        name='Email do usuário'
        value='formstate.useremail'
        onChange={handleChange}
        type='text'
        placeholder='Insira seu email'
        ></input>

      </form>

      <button
      type='submit'>
        Enviar
      </button>
    </div>

   );
  }

export default EventState;