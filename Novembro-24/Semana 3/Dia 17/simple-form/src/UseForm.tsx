"use client";

import { useState } from 'react';
import { useFormState } from 'react-dom';

type UseForm = {
    username:string,
    email:string,
    age:number,
}

export default UseForm;

export default function Home () {
    const [newuser, setNewUser] = useState<UseForm> ({
        username:'',
        email:'',
        age:0;
    })
    
    const handleSubmit [newuser] => {
        setNewUser(username, email, age: setStateAction<useState>)
    }

    return (
      
      <div>
      <div>
        <p>
          <input
        value=username.newuser{
        onChange={handleSubmit}
        type=string}>
        </input>
        </p>
        </div>

        <div>
        <p><input
        value=email.newuser{
        onChange={handleSubmit}
        type=string}>
        </input>
        </p>
        </div>
        
        <div>
        <p><input
        value=age.newuser{
        onChange={handleSubmit}
        type=number}>
        </input>
        </p>
        </div>
        <div>
        <button onClick={handleSubmit}>
          Submit
        </button>
        </div>
      </div>
    )
}


