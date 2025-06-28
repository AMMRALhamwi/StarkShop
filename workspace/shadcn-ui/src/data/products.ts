// src/data/products.ts
import { Product, Category } from "@/lib/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise-cancellation technology, providing crystal-clear sound and exceptional comfort for extended listening sessions.",
    price: 129.99,
    imageUrl: "https://placehold.co/400x400?text=Headphones",
    category: "Electronics",
    brand: "SoundWave",
    discountPercentage: 15,
    availability: "in_stock",
    featured: true,
    createdAt: "2023-11-15T10:00:00Z",
    variants: [
      { name: "Black" },
      { name: "White" },
      { name: "Blue" }
    ]
  },
  {
    id: "2",
    name: "Premium Cotton T-Shirt",
    description: "Soft, comfortable 100% cotton t-shirt with a modern fit. Perfect for everyday casual wear.",
    price: 24.99,
    imageUrl: "https://placehold.co/400x400?text=Tshirt",
    category: "Clothing",
    brand: "FashionBasics",
    discountPercentage: 0,
    availability: "in_stock",
    featured: true,
    createdAt: "2023-12-01T14:30:00Z",
    variants: [
      { name: "Small" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" }
    ]
  },
  {
    id: "3",
    name: "Stainless Steel Water Bottle",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof design with a durable finish.",
    price: 35.00,
    imageUrl: "https://placehold.co/400x400?text=WaterBottle",
    category: "Home & Living",
    brand: "EcoHydrate",
    discountPercentage: 10,
    availability: "in_stock",
    featured: true,
    createdAt: "2023-10-10T09:15:00Z",
    variants: [
      { name: "500ml" },
      { name: "750ml" },
      { name: "1 Liter" }
    ]
  },
  {
    id: "4",
    name: "Smart Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring, sleep analysis, and workout tracking. Connects seamlessly with your smartphone for notifications and app control.",
    price: 89.99,
    imageUrl: "https://placehold.co/400x400?text=FitnessTracker",
    category: "Electronics",
    brand: "TechFit",
    discountPercentage: 0,
    availability: "low_stock",
    featured: true,
    createdAt: "2023-12-15T16:45:00Z"
  },
  {
    id: "5",
    name: "Organic Moisturizing Face Cream",
    description: "Hydrating face cream made with organic ingredients. Nourishes and revitalizes skin while providing long-lasting moisture throughout the day.",
    price: 48.50,
    imageUrl: "https://placehold.co/400x400?text=FaceCream",
    category: "Beauty",
    brand: "NatureSkin",
    discountPercentage: 0,
    availability: "in_stock",
    featured: false,
    createdAt: "2023-11-20T11:30:00Z"
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    description: "Comfortable office chair with lumbar support, adjustable height, and breathable mesh back. Perfect for long work sessions at your desk.",
    price: 199.99,
    imageUrl: "https://placehold.co/400x400?text=OfficeChair",
    category: "Furniture",
    brand: "ComfortWorks",
    discountPercentage: 5,
    availability: "in_stock",
    featured: false,
    createdAt: "2023-09-25T13:45:00Z"
  },
  {
    id: "7",
    name: "Classic Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots, bill compartments, and RFID protection technology.",
    price: 45.00,
    imageUrl: "https://placehold.co/400x400?text=Wallet",
    category: "Accessories",
    brand: "LeatherCraft",
    discountPercentage: 0,
    availability: "in_stock",
    featured: false,
    createdAt: "2023-12-10T10:15:00Z",
    variants: [
      { name: "Brown" },
      { name: "Black" }
    ]
  },
  {
    id: "8",
    name: "Professional Chef Knife",
    description: "High-carbon stainless steel chef knife with ergonomic handle. The perfect balance of sharpness, durability and comfort for all your culinary needs.",
    price: 79.95,
    imageUrl: "https://placehold.co/400x400?text=ChefKnife",
    category: "Kitchen",
    brand: "CulinaryPro",
    discountPercentage: 0,
    availability: "in_stock",
    featured: false,
    createdAt: "2023-10-05T09:00:00Z"
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "Discover the latest gadgets and devices to enhance your tech life",
    imageUrl: "https://placehold.co/800x300?text=Electronics",
    link: "/products/category/electronics"
  },
  {
    id: "2",
    name: "Clothing",
    description: "Fashionable apparel for every season and occasion",
    imageUrl: "https://placehold.co/800x300?text=Clothing",
    link: "/products/category/clothing"
  },
  {
    id: "3",
    name: "Home & Living",
    description: "Beautiful and functional items to make your house a home",
    imageUrl: "https://placehold.co/800x300?text=Home%20and%20Living",
    link: "/products/category/home"
  },
  {
    id: "4",
    name: "Beauty",
    description: "Premium skincare and beauty products for your self-care routine",
    imageUrl: "https://placehold.co/800x300?text=Beauty",
    link: "/products/category/beauty"
  },
  {
    id: "5",
    name: "Accessories",
    description: "Stylish accessories to complete your look",
    imageUrl: "https://placehold.co/800x300?text=Accessories",
    link: "/products/category/accessories"
  },
  {
    id: "6",
    name: "Kitchen",
    description: "Essential tools and appliances for cooking enthusiasts",
    imageUrl: "https://placehold.co/800x300?text=Kitchen",
    link: "/products/category/kitchen"
  }
];

// Function to get products by category
export const getProductsByCategory = (categoryName: string) => {
  return products.filter(
    product => product.category.toLowerCase() === categoryName.toLowerCase()
  );
};

// Function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};