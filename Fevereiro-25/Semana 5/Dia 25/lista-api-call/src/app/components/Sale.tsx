export type Category = "hardware" | "software" | "serviços";

export interface Sale {
  id: string;
  product: string;
  quantity: number;
  pricePerUnit: number;
  category: Category;
  isSubscription?: boolean;
}

export type Accumulator = {
  totalRevenue: number;
  categoryCounts: Record<Category, number>;
  bestSeller: { productName: string; quantity: number };
};