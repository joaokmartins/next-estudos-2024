// pages/index.tsx

"use client";

import { useEffect } from 'react';

/**
 * Função que imprime números de 1 a 10, mas para no primeiro número ímpar.
 */
function imprimirNúmerosDeUmADezMasPararNoPrimeiroNumeroImpar(): void {
    for (let i = 1; i <= 10; i++) {
      if (i % 2 !== 0) break;
      console.log(i);
    }
}

/**
 * Componente principal que utiliza a função `imprimirNúmerosDeUmADezMasPararNoPrimeiroNumeroImpar`.
 */
const Home: React.FC = () => {
    useEffect(() => {
        // Executa a função ao montar o componente
        imprimirNúmerosDeUmADezMasPararNoPrimeiroNumeroImpar();
    }, []);

    return (
        <div>
            <h1>Imprimir Números de 1 a 10, mas Parar no Primeiro Número Ímpar  :</h1>
            <p>Verifique o console do navegador para ver os números.</p>
        </div>
    );
};

// Exporta a função `imprimirNúmerosDeUmADezMasPararNoPrimeiroNumeroImpar ` para ser usada em outros arquivos
export { imprimirNúmerosDeUmADezMasPararNoPrimeiroNumeroImpar };

// Exporta o componente `Home` como padrão
export default Home;