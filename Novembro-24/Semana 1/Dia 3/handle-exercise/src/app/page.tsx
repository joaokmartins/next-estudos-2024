import React, { useState } from 'react';

// Este é o componente de função Counter
const Counter: React.FC = () => {
  // Declaramos uma variável de estado 'count' com valor inicial 0
  const [count, setCount] = useState<number>(0);

  // Função handle para incrementar o contador
  const handleIncrement = () => {
    // Atualiza o estado 'count' incrementando seu valor
    setCount(prevCount => prevCount + 1);
  };

  // Função handle para decrementar o contador
  const handleDecrement = () => {
    // Atualiza o estado 'count' decrementando seu valor
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      {/* Botão que chama handleIncrement quando clicado */}
      <button onClick={handleIncrement}>Incrementar</button>
      {/* Botão que chama handleDecrement quando clicado */}
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
};

export default Counter;