import { ISignup } from "@/interfaces";
import { useState } from "react";

interface SignupProps {
  onConfirm: (form: ISignup) => void;
}

export function Signup(props: SignupProps) {
  const [form, setForm] = useState<ISignup>({
    email: '',
    name: '',
    password: '',
  });

  const [formConfirm, setFormConfirm] = useState<ISignup>({
    email: '',
    name: '',
    password: '',
  });

  function handleChangeForm(key: string, value: any): void {
    setForm({ ...form, [key]: value});
  };

  function handleChangeFormConfirm(key: string, value: any): void {
    setFormConfirm({ ...formConfirm, [key]: value});
  }
  
  function handleConfirm(): void {
    if (form.name.length < 3 ) {
      window.alert('O nome deve conter pelo menos 3 caracteres');
      return;
  }

    if (form.email.length < 3 ) {
      window.alert('O email deve conter pelo menos 3 caracters');
      return;
    }

    if (form.email !== formConfirm.email) {
      window.alert('O email deve conter pelo menos 3 caracteres');
      return;
    }

    if (form.password.length < 3) {
      window.alert('A senha deve conter pelo menos 3 caracteres');
      return;
    }

    if (form.password !== formConfirm.password) {
      window.alert('A senha de confirmação deve ser igual a senha.');
      return;
    }
  }
  return (
    <>
    <div>
      nome:
      &nbsp; 
      <input 
        type="email"
        value={form.name}
        onChange={(e) => handleChangeForm("name", e.target.value || "")} 
      />
    </div>
    
    <div>
      email: 
      &nbsp;
      <input 
      type="email" 
      value={form.email}
      onChange={(e) => handleChangeForm("email", e.target.value || "")}
      />
    </div>

    <div>
      confirme o email:
      &nbsp;
      <input 
        type="email"
        value={formConfirm.email}
        onChange={(e) =>
          handleChangeFormConfirm("email", e.target.value || "")
        }
      />
    </div>

    <div>
      senha:
      &nbsp;
        <input 
          type="password" 
          value={form.password}
          onChange={(e) => handleChangeForm('password', e.target.value || "")}
        />
    </div>
    <div>
      confirme a senha: 
      &nbsp;
        <input 
          type="password" 
          value={formConfirm.password}
          onChange={(e) => handleChangeFormConfirm('password', e.target.value || "")}
          />
    </div>
    <div>
      <button>Criar</button>
    </div>
  </>
  );    
}