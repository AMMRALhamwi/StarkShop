// src/pages/CartPage.tsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cartItems } = useCart();
  
  useEffect(() => {
    document.title = "ShopEase | Your Cart";
  }, []);

  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
          <p className="text-muted-foreground mt-1">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        
        <Separator />
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant?.name || 'default'}`}>
                  <CartItem item={item} />
                  <Separator className="mt-4" />
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="text-center py-16 space-y-6">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium">Your cart is empty</h2>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild className="mt-4">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}