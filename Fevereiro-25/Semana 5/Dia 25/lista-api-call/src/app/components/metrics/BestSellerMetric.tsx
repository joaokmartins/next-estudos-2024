import React from 'react';
import { Metric } from './Metric';

interface BestSellerMetricProps {
  bestSeller: { productName: string; quantity: number };
}

export const BestSellerMetric: React.FC<BestSellerMetricProps> = ({ bestSeller }) => (
  <Metric title="Produto Mais Vendido">
    <p>{bestSeller.productName} ({bestSeller.quantity} unidades)</p>
  </Metric>
);