import { ISignin } from "@/interfaces";
import { useState } from "react";

interface SigninProps {
  onConfirm: (form: ISignin) => void;
}

export function Signin(props: SigninProps) {
  const [signinForm, setSigninForm] = useState <ISignin>({
    email: '',
    password: '',
  });
  
  function handleChangeForm(key: string, value: any): void {
    setSigninForm({ ...signinForm, [key]: value });
  }

  function handleConfirm(): void {
    if (signinForm.email.length === 0) {
      window.alert('Por favor, informe um email válido');
      return;
    }

    if (signinForm.password.length < 3) {
      window.alert('A senha deve conter pelo menos 3 caracteres');
      return; 
    }

    props.onConfirm(signinForm);
  }

  return (
    <>
      <div>
        email:
        &nbsp;
        <input 
          type="email"
          value={signinForm.email}
          onChange={(e) => handleChangeForm('email', e.target.value || '')} 
        />  
      </div>
      <div>
        senha:
        &nbsp; 
        <input 
          type="password"
          value={signinForm.password}
          onChange={(e) => handleChangeForm('password', e.target.value || '')} 
        />
      </div>
      <div>
        <button onClick={handleConfirm}>Entrar</button>
      </div>
    </>
  );    
}