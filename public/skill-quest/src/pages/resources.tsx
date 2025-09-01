import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ResourceCard from "@/components/ui/resource-card";
import type { Resource, Category } from "@shared/schema";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("");

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: resources = [], isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources", selectedCategory, selectedSkillLevel, searchQuery],
  });

  const skillLevels = [
    { value: "beginner", label: "Beginner", color: "bg-green-100 text-green-800" },
    { value: "intermediate", label: "Intermediate", color: "bg-blue-100 text-blue-800" },
    { value: "advanced", label: "Advanced", color: "bg-purple-100 text-purple-800" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold mb-4">Educational Resources</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover curated learning materials tailored to your skill level and career goals
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  data-testid="input-search"
                  type="text"
                  placeholder="Search resources, skills, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg rounded-2xl border-2 focus:border-primary"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  data-testid="button-filter-all"
                  variant={selectedCategory === "" ? "default" : "secondary"}
                  onClick={() => setSelectedCategory("")}
                  className="rounded-full"
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    data-testid={`button-filter-${category.slug}`}
                    variant={selectedCategory === category.id ? "default" : "secondary"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="rounded-full"
                  >
                    <i className={`${category.icon} mr-2`} />
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Skill Level Filters */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  data-testid="button-skill-all"
                  variant={selectedSkillLevel === "" ? "default" : "outline"}
                  onClick={() => setSelectedSkillLevel("")}
                  className="rounded-full"
                >
                  All Levels
                </Button>
                {skillLevels.map((level) => (
                  <Badge
                    key={level.value}
                    data-testid={`button-skill-${level.value}`}
                    variant="outline"
                    className={`cursor-pointer px-4 py-2 rounded-full transition-all hover:scale-105 ${
                      selectedSkillLevel === level.value ? level.color : ""
                    }`}
                    onClick={() => setSelectedSkillLevel(selectedSkillLevel === level.value ? "" : level.value)}
                  >
                    {level.label}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
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
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              >
                {resources.map((resource, index) => {
                  const category = categories.find(c => c.id === resource.categoryId);
                  return (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ResourceCard resource={resource} category={category} />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {!isLoading && resources.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-2">No resources found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
