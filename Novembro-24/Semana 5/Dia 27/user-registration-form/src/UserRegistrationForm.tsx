"use client";

import { useState } from 'react';

type UserRegistrationState = {
    username:string;
    email:string;
    password:string;
    confirmpassword:string;
};

export default function UserRegistrationForm() = {
  const [registrationform, setRegistrationForm] = useState<UserRegistrationState> ({
    username:'';
    email:'';
    password:'';
    confirmpassword:'';
  });

  constHandleChangeUserName (e:ChangeEvent<HTMLInputElement>) {
    const {value} = (e:event.target);
    setRegistrationForm((prevState) => {
      (...prevState)
    }) 
    registrationform.username
  };

  constHandleChangeEmail (e:ChangeEvent<HTMLInputElement>) {
    const {value} = (e:event.target);
    setRegistrationForm((prevState) => {
      (...prevState)
    }) 
    registrationform.username
  };

  constHandleChangePassword (e:ChangeEvent<HTMLInputElement>) {
    const {value} = (e:event.target);
    setRegistrationForm((prevState) => {
      (...prevState)
    }) 
    registrationform.username
  };


  constHandleChangeConfirmPassword (e:ChangeEvent<HTMLInputElement>) {
    const {value} = (e:event.target);
    setRegistrationForm((prevState) => {
      (...prevState)
    }) 
    registrationform.username
  };

    return (
      <div><
        <Form Button={onState}>
          <input
          name='UserName'
          value={registrationform.username}
          onChange={constHandleChangeUserName}
          type='text'
          placeholder='Insira seu nome aqui'
          >
          </input>

          <input
          name='Email'
          value={registrationform.email}
          onChange={constHandleChangeEmail}
          type='text'
          placeholder='Insira seu nome aqui'
          >
          </input>

          <input
          name='Password'
          value={registrationform.password}
          onChange={constHandleChangePassword}
          type='text'
          placeholder='Insira seu nome aqui'
          >
          </input>

          <input
          name='Confirm Password'
          value={registrationform.confirmpassword}
          onChange={constHandleChangeConfirmPassword}
          type='text'
          placeholder='Insira seu nome aqui'
          >
          </input>

          <button type='submit'>
          Registrar
          </button>

        </Form>
      </div>
    )
}

