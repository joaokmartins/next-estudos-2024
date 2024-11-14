"use client";

import { useState } from 'react';

// Este é o tipo para o estado do botão. Aqui, simplificamos para apenas um booleano.
type ToggleButtonState = {
  onState: boolean;
};

export default function ToggleButton() {
  // Inicializa o estado com onState: false
  const [toggleState, setToggleState] = useState<ToggleButtonState>({ onState: false });

  // Função que troca o estado entre ligado e desligado
  const handleToggle = () => {
    setToggleState((prevState) => ({ onState: !prevState.onState }));
  };

  return (
    <div>
      {/* Botão que quando clicado chamará handleToggle para trocar o estado */}
      <button onClick={handleToggle}>
        {/* Exibe o texto do botão baseado no estado atual */}
        {toggleState.onState ? 'Desligar' : 'Ligar'}
      </button>
      {/* Mensagem de estado exibida no console */}
      <p>{toggleState.onState ? console.log('Ligado') : console.log('Desligado')}</p>
    </div>
  );
}