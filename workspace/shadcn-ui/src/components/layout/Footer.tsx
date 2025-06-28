// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">ShopEase</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for quality products at affordable prices.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Shop</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
                All Products
              </Link>
              <Link to="/products/category/electronics" className="text-sm text-muted-foreground hover:text-foreground">
                Electronics
              </Link>
              <Link to="/products/category/clothing" className="text-sm text-muted-foreground hover:text-foreground">
                Clothing
              </Link>
              <Link to="/products/category/home" className="text-sm text-muted-foreground hover:text-foreground">
                Home & Living
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Company</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
              <Link to="/returns" className="text-sm text-muted-foreground hover:text-foreground">
                Returns Policy
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">hello@shopease.com</span>
              <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              <span className="text-sm text-muted-foreground">123 Commerce St, Retail City, RC 10001</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}