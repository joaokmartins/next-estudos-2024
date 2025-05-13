import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { ISignin , ISignup } from "@/interfaces";
import axios from "axios";

export function Login() {
  const [type, setType] = useState<"signin" | "signup"> ("signin");
  
  function handleConfirmSignin(form: ISignin): void {
    console.log('logar:', form);
  }

  function handleConfirmSignup(form: ISignup): void {
    console.log('criar conta', form);
  }

  return (
    <>
      <h3>
        {type === 'signin'?  'Entrar': 'Cadastrar Usuário'}
      </h3>
      {type === 'signin' ? ( 
        <Signin onConfirm={handleConfirmSignin} /> 
    ) : (
        <Signup onConfirm={handleConfirmSignup} />
      )}  
      <hr />
      <div>
        <button 
          disabled={type === 'signin'}  
          onClick={() => setType('signin')}
          >
            Já tenho uma conta
          </button>
        <button 
          disabled={type === 'signup'}
          onClick={() => setType('signup')}
          >
            Criar conta
          </button>
      </div>    
    </>
  );    
}