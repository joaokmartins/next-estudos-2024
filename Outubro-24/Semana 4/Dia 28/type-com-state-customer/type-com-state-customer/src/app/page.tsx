  "use client";

  import { useState } from 'react';
  import Image from "next/image";
  import styles from "./page.module.css";
  import Customer from './components/Customer';

  export default function Home() {

    const [customer, setCustomer] = useState<Customer>({
      name:'Joaquim',
      email:'Joaquim da Silva',
      phone:+80008000800,
      address:'Rua Joaquim Nabuco',
      isActive:true,
    });

    return (
      <div>
        <h1>Detalhes do Cliente</h1>
        <p><strong>Nome:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Telefone:</strong> {customer.phone}</p>
        <p><strong>Endereço:</strong> {customer.address}</p>
        <p><strong>Ativo:</strong> {customer.isActive ? 'Sim' : 'Não'}</p>
        <button onClick={() => setCustomer({ ...customer, isActive: !customer.isActive })}>
          {customer.isActive ? 'Desativar Cliente' : 'Ativar Cliente'}
        </button>
      </div>
    );
  }
  