// src/components/cart/CartItem.tsx
import { Button } from "@/components/ui/button";
import { Trash, MinusCircle, PlusCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/lib/types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, price, imageUrl, quantity, variant, discountPercentage } = item;

  const isOnSale = discountPercentage > 0;
  const discountedPrice = isOnSale 
    ? price - (price * discountPercentage / 100)
    : price;

  const itemTotalPrice = discountedPrice * quantity;

  const handleIncreaseQuantity = () => {
    if (quantity < 10) {
      updateQuantity(id, quantity + 1, variant?.name);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1, variant?.name);
    }
  };

  const handleRemove = () => {
    removeFromCart(id, variant?.name);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 space-y-4 sm:space-y-0">
      <div className="flex-shrink-0 w-24 h-24 bg-muted rounded-md overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="flex-grow sm:ml-6 space-y-1">
        <h3 className="font-medium">{name}</h3>
        {variant && (
          <p className="text-sm text-muted-foreground">
            Variant: {variant.name}
          </p>
        )}
        <div className="flex items-center">
          {isOnSale ? (
            <>
              <p className="font-medium">${discountedPrice.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground line-through ml-2">
                ${price.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-medium">${price.toFixed(2)}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleDecreaseQuantity}
          disabled={quantity <= 1}
        >
          <MinusCircle className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleIncreaseQuantity}
          disabled={quantity >= 10}
        >
          <PlusCircle className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex items-center space-x-6 sm:ml-6">
        <p className="font-medium">${itemTotalPrice.toFixed(2)}</p>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleRemove}
        >
          <Trash className="h-4 w-4 text-destructive" />
        </Button>
      </div>
    </div>
  );
}