// src/pages/ProductDetailPage.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import ProductDetail from "@/components/products/ProductDetail";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(products.find(p => p.id === productId));
  
  useEffect(() => {
    // If product doesn't exist, navigate to 404
    if (!productId || !products.find(p => p.id === productId)) {
      navigate("/404", { replace: true });
      return;
    }
    
    // Find the product
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
    
    // Set document title
    if (foundProduct) {
      document.title = `ShopEase | ${foundProduct.name}`;
    }
  }, [productId, navigate]);
  
  // Get related products (same category)
  const relatedProducts = product
    ? products.filter(p => p.category === product.category && p.id !== product.id)
    : [];

  if (!product) return null;

  return (
    <div className="min-h-screen">
      <ProductDetail product={product} />
      
      {relatedProducts.length > 0 && (
        <div className="bg-muted/50 py-12">
          <FeaturedProducts
            products={relatedProducts}
            title="You May Also Like"
            description={`More ${product.category} products you might enjoy`}
          />
        </div>
      )}
    </div>
  );
}