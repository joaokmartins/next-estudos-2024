"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Order from './components/Order';

export default function Home() {
  const [order, setOrder] = useState<order> ({
    orderId:12,
    customerName:'Joaquim Valente',
    items:['Luva de boxe', 'Capacete de boxe'],
    status:Enviado,
  });
  
  return (
    <div>
      <h3>Meu pedido</h3>
      <p>Número da ordem:<strong>{order.orderId}</strong></p>
      <p>Nome do cliente:<strong>{order.customerName}</strong></p>
      <p>Itens:<strong></strong>{order.items}</p>
      <p>Total da compra:<strong>{order.totalAmount}</strong></p>
      <p>Status:<strong></strong>{order.status ? 'Pendente' : 'Enviado'}</p>
      <button onClick={() => setOrder({ ...order, status? })}>
      Alterar status do pedido {order.status? }
      </button>
    </div>
  );
}
