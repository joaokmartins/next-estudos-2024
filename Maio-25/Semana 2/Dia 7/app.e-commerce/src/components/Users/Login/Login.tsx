import { useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export function Login() {
  const [type, setType] = useState<'signin' | 'signup'> ('signin');
  return (
    <>
      <h3>
        {type === 'signin'?  'Entrar': 'Cadastrar Usuário'}
      </h3>
      {type === 'signin' ? <Signin /> : <Signup />}  
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