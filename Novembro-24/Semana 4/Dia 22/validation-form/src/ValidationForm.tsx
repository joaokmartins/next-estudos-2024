"use client";

import { useState } from 'react';

type ValidationForm = {
    username:string,
    useremail:string,
    usermessage:string,
}

export default function ValidationForm() {
    const [validate, setValidate] = useState<ValidationForm> ({
        username:'',
        useremail:'',
        usermessage:''
    })
  }

    const handleChangeUserName = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = validate.username;
        setValidate(prevState +
            ... prevstate
        )

    const handleChangeUserEmail = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = validate.useremail;
        setValidate(prevState +
            ... prevstate
        )    

    const handleChangeUserMessage = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = validate.usermessage;
        setValidate(prevState +
            ... prevstate
        )   
    }
    
    const handleSubmit = {
      alert(`'Nome do usuário':${validate.username}, 'Email do usuário':${validate.useremail}, 
        'Mensagem do usuário':${validate.usermessage}'`)
    }

    return(
      <div>
        <form >
          <input
          name='username'
          value={validate.username}
          onChange={handleChangeUserName}
          type='text'
          placeholder='Insira seu nome aqui'
          >   
          </input>
          
          <input
          name='useremail'
          value={validate.useremail}
          onChange={handleChangeUserEmail}
          type='text'
          placeholder='Insira seu email aqui'
          >   
          </input>

          <input
          name='usermessage'
          value={validate.usermessage}
          onChange={handleChangeUserMessage}
          type='text'
          placeholder='Insira sua mensagem aqui'
          >   
          </input>
          <button type='submit'>
            Enviar
          </button>
        </form>

      </div>

    )
}