"use client";
import React, { useEffect, useState } from 'react';
import { SalesMetrics } from './components/SalesMetrics';
import { Sale } from './components/Sale';

const SalesPage: React.FC = () => {
  const [sales, setSales] = useState<Sale[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        setLoading(true); // Inicia o carregamento

        // Substitua a URL pelo URL gerado no Mocky
        const response = await fetch('https://run.mocky.io/v3/f6989719-3724-40ae-8662-f37102a1c1ac');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados de vendas');
        }

        const data: Sale[] = await response.json(); // Obtém os dados da API
        setSales(data); // Define os dados no estado
      } catch (err: any) {
        setError(err.message); // Armazena a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchSalesData();
  }, []);

  if (loading) {
    return <p>Carregando dados de vendas...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados: {error}</p>;
  }

  return (
    <main>
      <h1>Dashboard de Vendas</h1>
      {sales ? (
        <SalesMetrics sales={sales} />
      ) : (
        <p>Nenhuma venda encontrada.</p>
      )}
    </main>
  );
};

export default SalesPage;