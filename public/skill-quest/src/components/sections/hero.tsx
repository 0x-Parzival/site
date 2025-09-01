import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleSearch = () => {
    setLocation(`/resources?search=${encodeURIComponent(searchQuery)}`);
  };

  const stats = [
    { value: "10,000+", label: "Resources", delay: 0.2 },
    { value: "50+", label: "Skill Categories", delay: 0.4 },
    { value: "95%", label: "Success Rate", delay: 0.6 },
    { value: "24/7", label: "Support", delay: 0.8 },
  ];

  return (
    <section className="hero-bg text-primary-foreground py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Master Skills,<br />
            <span className="bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Access curated educational resources organized by skill level. From beginner to advanced, 
            we'll guide your professional development journey.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="search-container bg-card rounded-2xl p-2 shadow-xl">
              <div className="flex items-center">
                <div className="flex-1 flex items-center">
                  <Search className="text-muted-foreground ml-4 mr-3 w-5 h-5" />
                  <Input
                    data-testid="input-hero-search"
                    type="text"
                    placeholder="Search resources, skills, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground py-4 border-0 focus-visible:ring-0 text-lg"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors font-semibold"
                  data-testid="button-hero-search"
                >
                  Search
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
              >
                <div className="text-3xl lg:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
