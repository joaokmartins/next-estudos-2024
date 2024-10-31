"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Customer from './Components/Customer';

export default function Home() {
  const [customer, setCustomer] = useState<Customer> ({
    name:'Joaquim Valente',
    email:'joaquimvalente@vb.com',
    phone:+801399900,
    address:'10 Miami Avenue',
    isActive:true,
  }); 

  return (
    <div>
      <h3>Clientes Somma</h3>
      <p><strong>Nome:</strong>{customer.name}</p>
      <p><strong>Email:</strong>{customer.email}</p>
      <p><strong>Telefone:</strong>{customer.phone}</p>
      <p><strong>Endereço:</strong>{customer.address}</p>
      <p><strong>Ativo:</strong>{customer.isActive? 'Sim':'Não'}</p>
      <button onClick={() => setCustomer({ ...customer, isActive:!customer.isActive})}>
        {customer.isActive ? 'Cliente está ativo' : 'Cliente não está ativo'}
      </button>

    </div>
    
  );
}
