import React from 'react';
import { Metric } from './Metric';

type Category = "hardware" | "software" | "serviços";

interface SalesByCategoryMetricProps {
  categoryCounts: Record<Category, number>;
}

export const SalesByCategoryMetric: React.FC<SalesByCategoryMetricProps> = ({ categoryCounts }) => (
  <Metric title="Vendas por Categoria">
    <ul>
      {Object.keys(categoryCounts).map(category => (
        <li key={category}>{category}: {categoryCounts[category as Category]}</li>
      ))}
    </ul>
  </Metric>
);