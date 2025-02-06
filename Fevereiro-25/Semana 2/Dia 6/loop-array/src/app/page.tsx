// pages/index.tsx

"use client";

import { useEffect } from 'react';

/**
 * Função que recebe um array e imprime a soma dos elementos usando o loop for.
 */
function imprimirASomaDosElementosDoArray(): void {
    let soma = [0, 1, 2, 3, 4, 5];
    for (let i = 0; i <= soma.length; i++) {
        const arraysoma = soma[0] + soma[1] + soma[2] + soma[3] + soma[4] + soma[5];
        console.log(arraysoma);
    }
}

/**
 * Componente principal que utiliza a função `imprimirASomaDosElementosDoArray`.
 */
const Home: React.FC = () => {
    useEffect(() => {
        // Executa a função ao montar o componente
        imprimirASomaDosElementosDoArray();
    }, []);

    return (
        <div>
            <h1>Imprimir A Soma dos Elementos do Array:</h1>
            <p>Verifique o console do navegador para ver os números.</p>
        </div>
    );
};

// Exporta a função `imprimirASomaDosElementosDoArray` para ser usada em outros arquivos
export { imprimirASomaDosElementosDoArray };

// Exporta o componente `Home` como padrão
export default Home;