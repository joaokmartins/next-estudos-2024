import { FormProps } from "./interface/IForm";
import { FormData } from "./interface/IForm";
import { useState } from "react";

export default function ValidateForm(FormProps:any) {
  const [formData, setFormData] = useState<FormData> ({
    name:"",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
  };

  return(

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome"
      />

      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Senha"
      />
      
      <input
        type="text"
        name="confirm password"
        value={formData.passwordConfirmation}
        onChange={handleChange}
        placeholder="Confirme a Senha"
      />
      <button type="submit">Enviar</button>
      
    </form>

    )
}