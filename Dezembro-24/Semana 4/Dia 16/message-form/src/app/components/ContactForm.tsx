"use client";

import { useState } from 'react';

type MyForm = {
    username:string;
    email:string;
    message:string;
    submit:boolean;
};

export default function ContactForm() {
  const [myformstate, setMyFormState] = useState<MyForm> ({
    username:'';
    email:'';
    message:'';
    submit:false;
  });

  handleChangeName = (e:React.ChangeEvent(HTMLInputElement)) => {
    {value} = e.target;
    ...prevState((prevState) =>)


  }


  handleSubmitButton = {
    if { myformstate.username.length < 2 
      alert(`Nome do usuário com menos de 2 caracteres`)
  }
    if {myformstate.email.length ~= @
      alert(`Email inválido`)
    }

    if { myformstate.message.length < 10
      alert(`A mensagem teve conter pelo menos 10 caracteres.`)
    }


  return (

    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
       <input
       name='username'
       value={myformstate.username}
       onChange={handleChangeName}
       type='text'
       placeholder='digite seu nome aqui'
       >
       
       </input>  
      
      </form>

    </div>

  )
};