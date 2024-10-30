'use client'

import { useState } from 'react';
import { Order } from './components/Order';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [order, setOrder] = useState<Order>({
    orderId: 5,
    customerName: 'Jose Mendes',
    items: ['cabo de freio', 'cabo de acelerador'],
    totalAmount: 4,
    status: 'Pendente',
  });


  return (

    <div>
    <h3>Meus pedidos</h3>
    <p><strong>Número do pedido:</strong>{order.orderId}</p>
    <p><strong>Nome do cliente:</strong>{order.customerName}</p>
    <p><strong>Itens do pedido:</strong>{order.items.join(',')}</p>
    <p><strong>Total de itens:</strong>{order.totalAmount}</p>
    <p><strong>Status do pedido:</strong>{order.status}</p>
    <button onClick={() => setOrder({ ...order,status: order.status === 'Pendente' ? 'Enviado':'Pendente'})}>
    {order.status === 'Pendente'?'Enviar pedido':'Marcar como Pendente'} 
    </button>
    </div>
  );
}
