// src/components/products/ProductCard.tsx
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { id, name, price, imageUrl, discountPercentage, category } = product;
  
  const isOnSale = discountPercentage > 0;
  const discountedPrice = isOnSale 
    ? (price - (price * discountPercentage / 100)).toFixed(2) 
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/products/${id}`}>
        <div className="aspect-square relative overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          {isOnSale && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{category}</p>
            <h3 className="font-medium leading-tight">{name}</h3>
            <div className="flex items-center gap-2">
              {isOnSale ? (
                <>
                  <p className="font-bold">${discountedPrice}</p>
                  <p className="text-sm text-muted-foreground line-through">${price.toFixed(2)}</p>
                </>
              ) : (
                <p className="font-bold">${price.toFixed(2)}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full" 
            onClick={handleAddToCart}
            variant="outline"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}