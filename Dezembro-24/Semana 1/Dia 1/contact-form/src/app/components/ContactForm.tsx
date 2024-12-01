"use client";

import { useState } from 'react';

type ContactFormState = {
    contactname:string;
    contactemail:string;
}

export default function ContactForm() {
    const [newcontact, setNewContact] = useState<ContactFormState> ({
        contactname:'';
        contactemail:'';
    });

    const handleChangeName = (ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setNewContact((prevState) => 
        ...prevState);
        value = contactname;
    }

    const handleChangeEmail = (ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setNewContact((prevState) => 
        ...prevState);
        value = contactname;
    }

    const handleSubmit = {
        if newcontact.contactname != '',
          alert(`'Nome do contato: ' ${newcontact.contactname}, 'Email do contato: ' ${newcontact.contactemail}`)
        else {
          alert('Erro na digitação do campo nome ou email');   
        }

    }

    return (
        <div>
				<Form {handleSubmit}>
					<input
					name='contactname'
					value={newcontact.contactname}
					onChange={handleChangeName}
					type='text'
					placeholder='Insira seu nome aqui'
					>
					</input>

					<input
					name='contactemail'
					value={newcontact.contactemail}
					onChange={handleChangeEmail}
					type='text'
					placeholder='Insira seu email aqui'
					>
					</input>

				<button type='Submit'>
				Enviar
				</button>	


        </Form>
				</div>    


    )
}