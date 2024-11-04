"use client";

// Importa React e useState do React
import React, { useState } from 'react';

// Define um componente funcional chamado ExemploOperacoes
const ExemploOperacoes: React.FC = () => {
  // Declara um estado usando useState. 'clicado' é o valor atual do estado, 'setClicado' é a função para atualizá-lo.
  const [clicado, setClicado] = useState(false);

  // Função para lidar com o evento de clique no botão
  const handleClick = () => {
    // Inverte o valor de 'clicado' usando o operador de negação '!'
    // Se 'clicado' for true, torna-se false, e vice-versa
    setClicado(!clicado);

  };

  const [count, setCount] = useState(0);

  const handleResetCount = () => {
    setCount(0);
  };

  const handleResetClick = () => {
    setCount(false);
  };
};

  return (
    <div>
      {/* Botão que chama a função 'lidarComClick' quando clicado */}
      <button onClick={handleClick}>
        {/* Usa operador ternário para decidir o texto a ser exibido no botão com base no estado 'clicado' */}
        {clicado ? 'Clique para Desmarcar' : 'Clique para Marcar'}
      </button>
      <p>
        {/* Usa '===' para verificar se 'clicado' é estritamente igual a true, e mostra o texto correspondente */}
        O botão foi {clicado === true ? 'clicado' : 'não clicado'}.
      </p>
      <button onClick={handleResetClick} 
      {handleResetCount}>Reset</button>
      <p>O contador está em: {count}</p>
    </div>
  );
};

// Exporta o componente para que possa ser usado em outras partes da aplicação
export default ExemploOperacoes;