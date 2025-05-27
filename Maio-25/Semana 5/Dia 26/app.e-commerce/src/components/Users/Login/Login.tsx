import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { ISignin , ISignup } from "@/interfaces";
import axios from "axios";
import { UserService } from "@/services/user.service";


export function Login() {
  const [type, setType] = useState<"signin" | "signup"> ("signin");
  
  function handleConfirmSignin(form: ISignin): void {
    UserService
    .signin(form)
    .then((data) => {
      console.log('login:', data);
      window.alert('Usuário logado');
  })
    .catch((error) => window.alert(`Erro: ${error}`));
}

  function handleConfirmSignup(form: ISignup): void {
    UserService
      .signup(form)
      .then((data) => {
        console.log('usuário criado:', data);
        window.alert('Usuário logado');
      })
      .catch((error) => window.alert(`Erro: ${error}`));
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