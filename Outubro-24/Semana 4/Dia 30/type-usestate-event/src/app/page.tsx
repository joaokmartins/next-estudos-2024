"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Event from './components/Event';

export default function Home() {
  const [event, setEvent] = useState<Event> ({
    eventName:'Casório Joaquim Valente',
    date: new Date('2024-12-13'),
    location: 'Rua Miami Beach',
    participants:30,
    isActive:true,
  });

  return (
    <div>
      <p><strong>Nome do evento:</strong>{event.eventName}</p>
      <p><strong>Data:</strong>{event.date.toLocaleDateString()}</p>
      <p><strong>Localização:</strong>{event.location}</p>
      <p><strong>Número de participantes:</strong>{event.participants}</p>
      <p><strong>Confirmado</strong>{event.isActive? 'Sim':'Não'}</p>
      <button onClick={() => setEvent({ ...event, isActive:!event.isActive})}>
      {event.isActive? 'Informar que está cancelado':'Informar que está confirmado'}  
      </button>
    </div>
  );
}
