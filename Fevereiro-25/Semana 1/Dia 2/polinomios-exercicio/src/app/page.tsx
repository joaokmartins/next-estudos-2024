"use client";

// components/StableMatching.tsx
import React, { useState } from 'react';

const StableMatching: React.FC = () => {
  // Estado para armazenar o número de homens/mulheres
  const [n, setN] = useState(0);
  
  // Estados para armazenar as listas de preferências
  const [manPrefs, setManPrefs] = useState<number[][]>([]);
  const [womanPrefs, setWomanPrefs] = useState<number[][]>([]);
  
  // Estado para armazenar o resultado do emparelhamento
  const [matching, setMatching] = useState<string>('');

  // Função para inicializar as estruturas de dados
  const initializeDataStructures = (n: number): void => {
    // Inicializa as listas de preferências dos homens e mulheres
    const manPrefs = Array(n).fill(0).map(() => Array(n).fill(0));
    const womanPrefs = Array(n).fill(0).map(() => Array(n).fill(0));
    
    // Inicializa a lista de homens livres
    const freeMen = Array(n).fill(0).map((_, index) => index);

    // Inicializa o array Next
    const next = Array(n).fill(1);

    // Inicializa o array Current com um símbolo nulo para indicar mulheres não engajadas
    const current = Array(n).fill(-1);

    // Inicializa o array Ranking
    const ranking = Array(n).fill(0).map(() => Array(n).fill(0));

    // Preenche as listas de preferências e o array Ranking
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        manPrefs[i][j] = j;
        womanPrefs[i][j] = j;
        ranking[i][j] = j;
      }
    }

    // Atualiza os estados
    setManPrefs(manPrefs);
    setWomanPrefs(womanPrefs);
  };

  // Função para executar o Algoritmo de Emparelhamento Estável
  const runStableMatching = (): void => {
    const freeMen = Array(n).fill(0).map((_, index) => index);
    const next = Array(n).fill(1);
    const current = Array(n).fill(-1);
    const ranking = Array(n).fill(0).map(() => Array(n).fill(0));

    // Preenche o array Ranking com base nas preferências das mulheres
    for (let w = 0; w < n; w++) {
      for (let i = 0; i < n; i++) {
        ranking[w][womanPrefs[w][i]] = i;
      }
    }

    while (freeMen.length > 0) {
      const m = freeMen.shift();
      const w = manPrefs[m][next[m] - 1];

      if (current[w] === -1) {
        current[w] = m;
      } else {
        const mPrime = current[w];
        if (ranking[w][m] < ranking[w][mPrime]) {
          current[w] = m;
          freeMen.push(mPrime);
        } else {
          freeMen.push(m);
        }
      }
      next[m]++;
    }

    // Formata o resultado do emparelhamento
    const result = current.map((partner, index) => `Mulher ${index + 1} está emparelhada com Homem ${partner + 1}`).join('\n');
    setMatching(result);
  };

  // Função para lidar com a mudança do valor de entrada
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Converte a string para um número inteiro
    const value = parseInt(event.target.value, 10);
    
    // Atualiza o estado com o novo valor
    setN(value);
    
    // Inicializa as estruturas de dados com base no novo valor de n
    initializeDataStructures(value);
  };

  return (
    <div>
      <h2>Algoritmo de Emparelhamento Estável</h2>
      <p>Insira o número de homens/mulheres (n):</p>
      {/* Input para entrada do usuário */}
      <input type="number" value={n} onChange={handleChange} />
      <button onClick={runStableMatching}>Executar Algoritmo</button>
      <p>{matching}</p>
    </div>
  );
};

export default StableMatching;