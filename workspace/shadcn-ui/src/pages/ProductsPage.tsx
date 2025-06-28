// src/pages/ProductsPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "@/components/products/ProductGrid";
import { products, getProductsByCategory } from "@/data/products";

export default function ProductsPage() {
  const { categoryName } = useParams<{ categoryName?: string }>();
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [pageTitle, setPageTitle] = useState("All Products");
  
  // Get unique categories from products
  const uniqueCategories = [...new Set(products.map(product => product.category))];
  
  useEffect(() => {
    if (categoryName) {
      const filtered = getProductsByCategory(categoryName);
      setDisplayedProducts(filtered);
      
      // Format the category name for display (capitalize first letter, replace dashes with spaces)
      const formattedCategory = categoryName
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      setPageTitle(`${formattedCategory} Products`);
      document.title = `ShopEase | ${formattedCategory}`;
    } else {
      setDisplayedProducts(products);
      setPageTitle("All Products");
      document.title = "ShopEase | All Products";
    }
  }, [categoryName]);

  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{pageTitle}</h1>
          <p className="text-muted-foreground mt-1">
            {displayedProducts.length} {displayedProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
        
        <ProductGrid products={displayedProducts} categories={uniqueCategories} />
      </div>
    </div>
  );
}