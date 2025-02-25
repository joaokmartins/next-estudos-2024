import React from 'react';
import { Metric } from './Metric';

interface SalesRevenueMetricProps {
  totalRevenue: number;
}

export const SalesRevenueMetric: React.FC<SalesRevenueMetricProps> = ({ totalRevenue }) => (
  <Metric title="Receita Total">
    <p>R$ {totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
  </Metric>
);