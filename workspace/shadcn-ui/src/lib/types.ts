// src/lib/types.ts
export interface ProductVariant {
  name: string;
  price?: number;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  brand: string;
  discountPercentage: number;
  availability: 'in_stock' | 'low_stock' | 'out_of_stock';
  variants?: ProductVariant[];
  featured?: boolean;
  createdAt: string;
  quantity?: number;
  variant?: ProductVariant;
}

export interface CartItem extends Product {
  quantity: number;
  variant?: ProductVariant;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}