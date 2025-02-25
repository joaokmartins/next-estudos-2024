import { Sale, Category } from '../components/Sale';

export const getMockedSalesData = (): Sale[] => {
  return [
    { id: "1", product: "Produto A", quantity: 10, pricePerUnit: 100, category: "hardware" },
    { id: "2", product: "Produto B", quantity: 12, pricePerUnit: 1020, category: "hardware" },
    { id: "3", product: "Produto C", quantity: 1400, pricePerUnit: 10440, category: "hardware" },
    { id: "4", product: "Produto D", quantity: 140, pricePerUnit: 15600, category: "hardware" },
    // Add more sales data here...
  ];
};

// In a real scenario, you might also add:
// export const fetchSalesData = async (): Promise<Sale[]> => {
//   const response = await fetch('your-api-endpoint');
//   const data = await response.json();
//   return data;
// };