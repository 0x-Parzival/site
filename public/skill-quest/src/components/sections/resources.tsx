import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import ResourceCard from "@/components/ui/resource-card";
import type { Resource, Category } from "@shared/schema";

export default function ResourcesSection() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [, setLocation] = useLocation();

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: resources = [], isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources", selectedCategory],
  });

  // Show only first 6 resources for the home page
  const displayedResources = resources.slice(0, 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Explore by Category</h2>
          <p className="text-xl text-muted-foreground">Find resources tailored to your career goals</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            data-testid="button-category-all"
            variant={selectedCategory === "" ? "default" : "secondary"}
            onClick={() => setSelectedCategory("")}
            className="skill-pill rounded-full font-semibold shadow-lg"
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              data-testid={`button-category-${category.slug}`}
              variant={selectedCategory === category.id ? "default" : "secondary"}
              onClick={() => setSelectedCategory(category.id)}
              className="skill-pill rounded-full transition-colors"
            >
              <i className={`${category.icon} mr-2`} />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Resource Cards Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-2xl h-64 mb-4"></div>
                <div className="bg-muted rounded h-4 mb-2"></div>
                <div className="bg-muted rounded h-3 w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {displayedResources.map((resource, index) => {
              const category = categories.find(c => c.id === resource.categoryId);
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ResourceCard resource={resource} category={category} />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => setLocation("/resources")}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold shadow-lg"
            data-testid="button-load-more"
          >
            Load More Resources
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
