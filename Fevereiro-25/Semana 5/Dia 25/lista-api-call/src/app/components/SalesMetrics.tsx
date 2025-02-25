import React from 'react';
import { useState } from 'react';
import { SalesRevenueMetric } from './metrics/SalesRevenueMetric';
import { SalesByCategoryMetric } from './metrics/SalesByCategoryMetric';
import { BestSellerMetric } from './metrics/BestSellerMetric';
import { Sale, Category, Accumulator } from './Sale'; 
import { PriceSearch } from './metrics/PriceSearch';

interface SalesMetricsProps {
  sales: Sale[];
}

export const SalesMetrics: React.FC<SalesMetricsProps> = ({ sales }) => {

  const { totalRevenue, categoryCounts, bestSeller } = React.useMemo(() => {
    return sales.reduce<Accumulator>((acc, sale) => {
      const saleTotal = sale.quantity * sale.pricePerUnit;
      const updatedCategoryCounts = {
        ...acc.categoryCounts,
        [sale.category]: (acc.categoryCounts[sale.category] || 0) + sale.quantity
      };
      const newBestSeller = sale.quantity > acc.bestSeller.quantity 
        ? { productName: sale.product, quantity: sale.quantity } 
        : acc.bestSeller;

      return {
        totalRevenue: acc.totalRevenue + saleTotal,
        categoryCounts: updatedCategoryCounts,
        bestSeller: newBestSeller
      };
    }, { 
      totalRevenue: 0,
      categoryCounts: { hardware: 0, software: 0, serviços: 0 },
      bestSeller: { productName: '', quantity: 0 }
    });
  }, [sales]);

  return (
    <div>
      <div className="sales-metrics">
        <h2>Métricas de Vendas</h2>
        <SalesRevenueMetric totalRevenue={totalRevenue} />
        <SalesByCategoryMetric categoryCounts={categoryCounts} />
        <BestSellerMetric bestSeller={bestSeller} />
      </div>
        <PriceSearch sales={sales} />
    </div>
  );
}
;