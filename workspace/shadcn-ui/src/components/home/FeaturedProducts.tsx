// src/components/home/FeaturedProducts.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { Product } from "@/lib/types";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  description?: string;
}

export default function FeaturedProducts({
  products,
  title = "Featured Products",
  description = "Check out our selection of featured products"
}: FeaturedProductsProps) {
  const [displayCount, setDisplayCount] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    // Set initial display count based on screen size
    if (windowWidth >= 1280) {
      setDisplayCount(4);
    } else if (windowWidth >= 768) {
      setDisplayCount(3);
    } else if (windowWidth >= 640) {
      setDisplayCount(2);
    } else {
      setDisplayCount(1);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const displayedProducts = products.slice(0, displayCount);

  return (
    <section className="py-12 bg-background">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link to="/products">
              Browse all products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}