// src/components/home/HeroBanner.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

export default function HeroBanner({
  title = "Welcome to Stark Market",
  subtitle = "Your one-stop shop for groceries and everything else you need.",
  backgroundImage = "https://placehold.co/1600x800?text=Stark+Market",
  primaryBtnText = "Shop Now",
  primaryBtnLink = "/products",
  secondaryBtnText = "Learn More",
  secondaryBtnLink = "/about"
}: HeroBannerProps) {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat h-[70vh]" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
    >
      <div className="container h-full flex flex-col justify-center items-start space-y-6 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{title}</h1>
          <p className="text-lg text-white/90">{subtitle}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="sm:min-w-[150px]">
            <Link to={primaryBtnLink}>
              {primaryBtnText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild className="bg-white/10 hover:bg-white/20 text-white border-white/30 sm:min-w-[150px]">
            <Link to={secondaryBtnLink}>
              {secondaryBtnText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}