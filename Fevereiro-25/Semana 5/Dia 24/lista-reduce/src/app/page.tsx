"use client";
import React, { useEffect, useState } from 'react';
import { SalesMetrics } from './components/SalesMetrics';
import { Sale } from './components/Sale';
import { getMockedSalesData } from './data/salesData';

const Page: React.FC = () => {
  // State to hold sales data
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    // In development or for example, you can use the mocked data:
    const mockedSalesData = getMockedSalesData();
    setSales(mockedSalesData);

    // Or if you have an API:
    // fetchSalesData().then(data => setSales(data));
  }, []);

  return (
    <main>
      <h1>Dashboard de Vendas</h1>
      {sales.length > 0 ? (
        <SalesMetrics sales={sales} />
      ) : (
        <p>Carregando dados de vendas...</p>
      )}
    </main>
  );
};

export default Page;