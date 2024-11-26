// page.tsx dentro da pasta app

import React from 'react';
import ProductRegistrationForm from '@/ProductRegistrationForm'; // Ajuste o caminho conforme necessário

export default function Page() {
  return (
    <div>
      <h1>Cadastro de Produto</h1>
      <ProductRegistrationForm />
    </div>
  );
}