// pages/index.tsx

"use client";

import { useEffect } from 'react';

/**
 * Função que imprime os números de 1 a 5 no console.
 */
function imprimirOFatorialDeCinco(): void { 
    let fatorial = 1;
  for (let i = 1; i <= 5; i++) {
      fatorial *= i;
  }
  console.log(fatorial);
}

/**
 * Componente principal que utiliza a função `imprimirNumerosDeUmAteCinco`.
 */
const Home: React.FC = () => {
    useEffect(() => {
        // Executa a função ao montar o componente
        imprimirOFatorialDeCinco();
    }, []);

    return (
        <div>
            <h1>Imprimir o Fatorial de 5:</h1>
            <p>Verifique o console do navegador para ver os números.</p>
        </div>
    );
};

// Exporta a função `imprimirNumerosDeUmAteCinco` para ser usada em outros arquivos
export { imprimirOFatorialDeCinco };

// Exporta o componente `Home` como padrão
export default Home;