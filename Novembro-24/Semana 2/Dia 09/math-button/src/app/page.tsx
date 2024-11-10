"use client";

import { useState } from 'react';
import { MathOperationType, MathOperationState } from './types/MathOperation';

export default function Home() {
  // Estado inicial para gerenciar pontuação, histórico e operação
  const [state, setState] = useState<MathOperationState>({
    score: 0,
    history: [],
    operation: 'add'
  });

  // Função para determinar a próxima operação
  const getNextOperation = (currentOperation: MathOperationType): MathOperationType => {
    const operations: MathOperationType[] = ['add', 'subtract', 'multiply', 'divide'];
    const currentIndex = operations.indexOf(currentOperation);
    return operations[(currentIndex + 1) % operations.length];
  };

  // Função principal para manipular o clique do botão
  const handleButtonClick = () => {
    // Gera um número aleatório entre 1 e 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Realiza a operação matemática baseada no estado atual
    let newScore = state.score;
    switch (state.operation) {
      case 'add':
        newScore += randomNumber;
        break;
      case 'subtract':
        newScore -= randomNumber;
        break;
      case 'multiply':
        newScore *= randomNumber;
        break;
      case 'divide':
        // Evita divisão por zero
        newScore = randomNumber !== 0 ? Math.floor(newScore / randomNumber) : newScore;
        break;
    }

    // Atualiza o estado com o novo score, histórico e próxima operação
    setState({
      score: newScore,
      history: [
        ...state.history, 
        `${state.operation.toUpperCase()}: ${randomNumber} (Result: ${newScore})`
      ],
      operation: getNextOperation(state.operation)
    });
  };

  // Função para resetar o jogo
  const handleReset = () => {
    setState({
      score: 0,
      history: [],
      operation: 'add'
    });
  };

  return (
    <div style={{ 
      fontFamily: 'Arial', 
      maxWidth: '400px', 
      margin: '0 auto', 
      textAlign: 'center' 
    }}>
      {/* Título com a operação atual */}
      <h1>Math Operation: {state.operation.toUpperCase()}</h1>
      
      {/* Exibe a pontuação atual */}
      <h2>Current Score: {state.score}</h2>
      
      {/* Botão principal para realizar operações */}
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px 0'
        }}
      >
        Perform {state.operation.toUpperCase()} Operation
      </button>
      
      {/* Botão de reset */}
      <button 
        onClick={handleReset}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '0 10px'
        }}
      >
        Reset
      </button>

      {/* Histórico de operações */}
      <div style={{ marginTop: '20px' }}>
        <h3>Operation History:</h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          maxHeight: '200px', 
          overflowY: 'auto' 
        }}>
          {state.history.map((operation, index) => (
            <li key={index} style={{ 
              backgroundColor: '#f1f1f1', 
              margin: '5px 0', 
              padding: '5px' 
            }}>
              {operation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}