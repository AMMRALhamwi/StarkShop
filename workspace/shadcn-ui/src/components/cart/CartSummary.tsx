// src/components/cart/CartSummary.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, CreditCard, ArrowRight } from "lucide-react";

export default function CartSummary() {
  const { cartItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce((total, item) => {
    const price = item.discountPercentage > 0
      ? item.price - (item.price * item.discountPercentage / 100)
      : item.price;
    return total + price * item.quantity;
  }, 0);

  const shippingCost = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.06; // 6% tax
  const total = subtotal + shippingCost + tax;

  const handleCheckout = () => {
    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      alert("Checkout functionality would be implemented with a real payment gateway");
    }, 1500);
  };

  return (
    <div className="bg-background border rounded-lg p-6">
      <h2 className="font-medium text-lg mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          {shippingCost === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span>${shippingCost.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <Separator />
        
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <Button 
          className="w-full" 
          size="lg" 
          onClick={handleCheckout}
          disabled={isLoading || cartItems.length === 0}
        >
          {isLoading ? (
            "Processing..."
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" /> Checkout
            </>
          )}
        </Button>
        
        <div className="text-center">
          <Button 
            variant="link" 
            className="text-sm text-muted-foreground"
            asChild
          >
            <a href="/products">
              <ShoppingBag className="mr-1 h-4 w-4" /> 
              Continue Shopping
            </a>
          </Button>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t text-center">
        <p className="text-xs text-muted-foreground">
          By checking out, you agree to our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}