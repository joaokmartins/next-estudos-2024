// PriceSearch.tsx (componente separado)
import { useState } from 'react';
import { Sale } from '../Sale';

interface PriceSearchProps {
  sales: Sale[];
}

export const PriceSearch = ({ sales }: PriceSearchProps) => {
  const [searchPrice, setSearchPrice] = useState<number>(0);
  const [foundSale, setFoundSale] = useState<Sale | undefined>();

  const handleSearch = () => {
    const numericPrice = Number(searchPrice);
    if (isNaN(numericPrice)) return;
    
    const result = sales.find(sale => sale.pricePerUnit < numericPrice);
    setFoundSale(result);
  };

  return (
    <div>
      <input 
        type='number'
        value={searchPrice}
        onChange={(e) => setSearchPrice(parseFloat(e.target.value))}
        placeholder='Digite um valor'
      />
      <button onClick={handleSearch}>
        Buscar Produtos Abaixo Deste Preço
      </button>
      {/* ... mesma lógica de exibição ... */}
    </div>
  );
};