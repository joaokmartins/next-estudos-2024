// pages/index.tsx
"use client"; // Marca este componente como um componente cliente no Next.js

import React, { useState } from 'react';
import { Humour, HumourInfo } from './types/Humours';
  
// Objeto com informações de cada humor
const humoursInfo: Record<Humour, HumourInfo> = {
  Feliz: { color: 'yellow', emoji: '😊', message: 'Que dia incrível!' },
  Energético: { color: 'red', emoji: '💪', message: 'Pronto para conquistar o mundo!' },
  Relaxado: { color: 'blue', emoji: '😌', message: 'Momento de paz e tranquilidade.' },
};

// Array com todos os humores para facilitar a alternância
const humours: Humour[] = Object.keys(humoursInfo) as Humour[];

export default function Home() {
  // Estado para o humor atual
  const [currentHumour, setCurrentHumour] = useState<Humour>('Feliz');
  
  // Estado para contar as mudanças de humor
  const [changeCount, setChangeCount] = useState(0);

  // Função para mudar o humor
  const changeHumour = () => {
    // Encontra o índice do próximo humor
    const currentIndex = humours.indexOf(currentHumour);
    const nextIndex = (currentIndex + 1) % humours.length;
    
    // Atualiza o humor atual
    setCurrentHumour(humours[nextIndex]);
    
    // Incrementa o contador de mudanças
    setChangeCount(prevCount => prevCount + 1);
  };

  // Obtém as informações do humor atual
  const currentHumourInfo = humoursInfo[currentHumour];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Botão de Humor do Dia</h1>
      
      {/* Botão que muda o humor */}
      <button 
        onClick={changeHumour}
        style={{
          backgroundColor: currentHumourInfo.color,
          padding: '10px 20px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {currentHumourInfo.emoji} {currentHumour}
      </button>

      {/* Exibe a mensagem do humor atual */}
      <p style={{ marginTop: '20px', fontSize: '16px' }}>
        {currentHumourInfo.message}
      </p>

      {/* Exibe o contador de mudanças */}
      <p style={{ marginTop: '10px', fontSize: '14px' }}>
        Mudanças de humor: {changeCount}
      </p>
    </div>
  );
}