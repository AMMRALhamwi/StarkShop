// src/pages/HomePage.tsx
import { useEffect } from "react";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategorySection from "@/components/home/CategorySection";
import { getFeaturedProducts, categories } from "@/data/products";

export default function HomePage() {
  // Placeholder images for demo purposes
  const heroBackgroundImage = "/assets/images/hero-banner.jpg";
  
  useEffect(() => {
    // Set document title
    document.title = "ShopEase | Home";
  }, []);

  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      <HeroBanner 
        backgroundImage={heroBackgroundImage}
        title="Discover Quality Products"
        subtitle="Shop our latest collection with exclusive designs and unbeatable prices"
      />
      
      <FeaturedProducts 
        products={featuredProducts}
        title="Featured Products"
        description="Check out our handpicked selection of top products"
      />
      
      <CategorySection 
        categories={categories}
        title="Shop by Category"
        description="Find exactly what you're looking for"
      />
    </div>
  );
}