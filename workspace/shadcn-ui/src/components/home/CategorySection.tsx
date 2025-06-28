// src/components/home/CategorySection.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface CategorySectionProps {
  categories: Category[];
  title?: string;
  description?: string;
}

export default function CategorySection({
  categories,
  title = "Shop by Category",
  description = "Browse our collection by category"
}: CategorySectionProps) {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 border bg-card min-h-[250px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="font-medium text-xl text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{category.description}</p>
                
                <Button asChild size="sm" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Link to={category.link}>
                    Browse {category.name} <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}