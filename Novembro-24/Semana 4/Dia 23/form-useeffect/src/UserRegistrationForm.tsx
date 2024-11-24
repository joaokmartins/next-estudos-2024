"use client";

import { useEffect, useState } from 'react';

type UserFormState = {
    username:string,
    useremail:string,
    userpassword:string,
}

export default function UserRegistrationForm() = {
  const [initialstate, setInitialState] = useState<UserFormState> ({
    username:'',
    useremail:'',
    userpassword:'',
  });

  const handleChangeName = (Change<HTMLInputElement>) => {
    const {name, email} = (e:);
    setInitialState(prevState()=>
    ...prevState)
  }


  const handleChangeEmail = (Change<HTMLInputElement>) => {
    const {name, email} = (e:);
    setInitialState(prevState()=>
    ...prevState)
  }

  const handleChangePassword = (Change<HTMLInputElement>) => {
    const {name, email} = (e:);
    setInitialState(prevState()=>
    ...prevState)
  }

  useEffect(effect: EffectCallback, deps?: DependencyList): void

    return 
    
    (
      <div>
        <Form state>
          <input
          name='username'
          value={initialstate.username}
          onChange={handleChangeName}
          type='text'
          placeholder='Digite seu nome aqui'
          >
          </input>

          <input
          name='useremail'
          value={initialstate.useremail}
          onChange={handleChangeEmail}
          type='text'
          placeholder='Digite seu email aqui'
          >
          </input>

          <input
          name='userpassword'
          value={initialstate.userpassword}
          onChange={handleChangePassword}
          type='text'
          placeholder='Digite sua senha aqui'
          >

          </input>
        </Form>


      </div>
    )
}