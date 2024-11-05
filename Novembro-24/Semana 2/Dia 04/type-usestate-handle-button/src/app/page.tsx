"use client";

// Importa React e useState do React
import React, { useState } from 'react';

// Define um componente funcional chamado ExemploOperacoes
const ExemploOperacoes: React.FC = () => {
  // Declara um estado usando useState. 'clicado' é o valor atual do estado, 'setClicado' é a função para atualizá-lo.
  const [clicado, setClicado] = useState(false);

  // Declara um estado para contar o número de cliques
  const [count, setCount] = useState(0);

  // Função para lidar com o evento de clique no botão
  const handleClick = () => {
    // Inverte o valor de 'clicado' usando o operador de negação '!'
    setClicado(!clicado);

    // Incrementa o contador de cliques em 1
    setCount(count + 1);
  };

  // Função para resetar o contador e o estado 'clicado'
  const handleReset = () => {
    // Reseta o contador de cliques para 0
    setCount(0);
    // Reseta o estado 'clicado' para false
    setClicado(false);
  };

  return (
    <div>
      {/* Botão que chama a função 'handleClick' quando clicado */}
      <button onClick={handleClick}>
        {/* Usa operador ternário para decidir o texto a ser exibido no botão com base no estado 'clicado' */}
        {clicado ? 'Clique para Desmarcar' : 'Clique para Marcar'}
      </button>
      <p>
        {/* Usa '===' para verificar se 'clicado' é estritamente igual a true, e mostra o texto correspondente */}
        O botão foi {clicado === true ? 'clicado' : 'não clicado'}.
      </p>
      {/* Botão que chama a função 'handleReset' para resetar o contador e o estado clicado */}
      <button onClick={handleReset}>Reset</button>
      <p>O contador está em: {count} vezes.</p>
    </div>
  );
};

// Exporta o componente para que possa ser usado em outras partes da aplicação
export default ExemploOperacoes;