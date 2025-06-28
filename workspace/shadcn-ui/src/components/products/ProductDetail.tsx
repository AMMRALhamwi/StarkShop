// src/components/products/ProductDetail.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  MinusCircle, 
  PlusCircle, 
  ShoppingCart, 
  ArrowRight,
  CircleCheck,
  Truck,
  ShieldCheck
} from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
  relatedProducts?: Product[];
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { 
    id, 
    name, 
    price, 
    imageUrl, 
    description, 
    category, 
    discountPercentage, 
    brand, 
    availability,
    variants = [] 
  } = product;

  const [selectedVariant, setSelectedVariant] = useState(variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const isOnSale = discountPercentage > 0;
  const discountedPrice = isOnSale 
    ? price - (price * discountPercentage / 100) 
    : null;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      variant: selectedVariant,
    });
  };

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
  };

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-md border">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-muted-foreground">{brand}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{category}</span>
            </div>
          </div>

          <div className="flex items-center">
            {isOnSale ? (
              <>
                <span className="text-2xl font-bold">${discountedPrice?.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through ml-2">
                  ${price.toFixed(2)}
                </span>
                <span className="ml-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md">
                  {discountPercentage}% OFF
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">${price.toFixed(2)}</span>
            )}
          </div>

          <Separator />

          {variants.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Variant</label>
              <Select
                value={selectedVariant?.name || ""}
                onValueChange={(value) => {
                  const newVariant = variants.find((v) => v.name === value);
                  if (newVariant) setSelectedVariant(newVariant);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
                <SelectContent>
                  {variants.map((variant) => (
                    <SelectItem key={variant.name} value={variant.name}>
                      {variant.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Quantity</label>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={incrementQuantity}
                disabled={quantity >= 10}
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleAddToCart}
              className="flex-1"
              disabled={availability === "out_of_stock"}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline" className="flex-1">
              Buy Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <CircleCheck className="mr-2 h-4 w-4 text-green-500" />
              <span>
                {availability === "in_stock" 
                  ? "In Stock" 
                  : availability === "low_stock" 
                  ? "Low Stock" 
                  : "Out of Stock"}
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Truck className="mr-2 h-4 w-4" />
              <span>Free shipping over $50</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <ShieldCheck className="mr-2 h-4 w-4" />
              <span>Secure checkout</span>
            </div>
          </div>

          <Separator />

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="delivery">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-sm text-muted-foreground">{description}</p>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <div className="text-sm">
                <dl className="space-y-2">
                  <div className="flex">
                    <dt className="font-medium min-w-[120px]">Brand</dt>
                    <dd className="text-muted-foreground">{brand}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-medium min-w-[120px]">Category</dt>
                    <dd className="text-muted-foreground">{category}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-medium min-w-[120px]">ID</dt>
                    <dd className="text-muted-foreground">{id}</dd>
                  </div>
                </dl>
              </div>
            </TabsContent>
            <TabsContent value="delivery" className="pt-4">
              <div className="space-y-4 text-sm">
                <p>Free standard shipping on orders over $50.</p>
                <p>Express shipping available for an additional fee.</p>
                <p>Estimated delivery: 3-5 business days</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}