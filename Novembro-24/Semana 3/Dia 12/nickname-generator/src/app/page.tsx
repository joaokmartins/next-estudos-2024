"use client";

import { useState } from 'react';

// Definição do tipo para Nickname
type Nickname = {
  id: number;
  text: string;
  style: 'gamer' | 'cool' | 'funny';
  generatedAt: Date;
}

export default function Home() {
  // Arrays de prefixos e sufixos para geração de nicknames
  const namePrefixes = ['Su', 'Ale', 'Mar', 'Bar', 'Bei'];
  const nameSuffixes = ['çola', 'dete', 'de', 'net'];
  const styles: Nickname['style'][] = ['gamer', 'cool', 'funny'];

  // Estado para armazenar o nickname atual
  const [nicknameState, setNicknameState] = useState<Nickname>({
    id: 0,
    text: 'Clique para gerar um nickname',
    style: 'gamer',
    generatedAt: new Date()
  });

  // Estado para armazenar histórico de nicknames
  const [nicknameHistory, setNicknameHistory] = useState<Nickname[]>([]);

  // Função para gerar nickname
  const handleNicknameGenerator = () => {
    // Gera um ID único usando timestamp
    const newId = Date.now();

    // Seleciona prefixo e sufixo aleatórios
    const randomPrefix = namePrefixes[Math.floor(Math.random() * namePrefixes.length)];
    const randomSuffix = nameSuffixes[Math.floor(Math.random() * nameSuffixes.length)];

    // Combina prefixo e sufixo
    const newNickname = randomPrefix + randomSuffix;

    // Seleciona estilo aleatório
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    // Cria novo objeto de nickname
    const generatedNickname: Nickname = {
      id: newId,
      text: newNickname,
      style: randomStyle,
      generatedAt: new Date()
    };

    // Atualiza estado atual do nickname
    setNicknameState(generatedNickname);

    // Adiciona ao histórico de nicknames
    setNicknameHistory(prev => [...prev, generatedNickname]);
  };

  return (
    <div style={{ 
      fontFamily: 'Arial', 
      maxWidth: '600px', 
      margin: '0 auto', 
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1>Gerador de Nicknames</h1>

      {/* Botão para gerar nickname */}
      <button 
        onClick={handleNicknameGenerator}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Gere aqui seu nickname!
      </button>

      {/* Exibe nickname atual */}
      <div 
        style={{ 
          backgroundColor: 
            nicknameState.style === 'gamer' ? '#e6f2ff' 
            : nicknameState.style === 'cool' ? '#f0f0f0' 
            : '#fff2e6',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px'
        }}
      >
        <h2>Seu Nickname:</h2>
        <p>{nicknameState.text}</p>
        <small>Estilo: {nicknameState.style}</small>
        <br />
        <small>Gerado em: {nicknameState.generatedAt.toLocaleString()}</small>
      </div>

      {/* Histórico de nicknames */}
      <div>
        <h3>Histórico de Nicknames</h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          {nicknameHistory.map((nickname) => (
            <li 
              key={nickname.id}
              style={{ 
                backgroundColor: '#f1f1f1', 
                margin: '10px 0', 
                padding: '10px',
                borderRadius: '5px'
              }}
            >
              {nickname.text} 
              <small> - {nickname.style} - {nickname.generatedAt.toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}