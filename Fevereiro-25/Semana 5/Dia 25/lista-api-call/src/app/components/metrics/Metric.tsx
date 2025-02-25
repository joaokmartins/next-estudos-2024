import React from 'react';

export interface MetricProps {
  title: string;
  children: React.ReactNode;
}

export const Metric: React.FC<MetricProps> = ({ title, children }) => (
  <div className="metric">
    <h3>{title}:</h3>
    {children}
  </div>
);