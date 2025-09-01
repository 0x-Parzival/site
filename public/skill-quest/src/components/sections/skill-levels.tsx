import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Sprout, TrendingUp, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillLevels() {
  const [, setLocation] = useLocation();

  const skillLevels = [
    {
      id: "beginner",
      title: "Beginner",
      description: "Perfect for those starting their journey. Build foundational skills with step-by-step guidance.",
      icon: Sprout,
      gradient: "from-green-400 to-green-600",
      features: ["Interactive tutorials", "Basic concepts", "Practical exercises"],
      buttonText: "Start Learning",
      featured: false,
    },
    {
      id: "intermediate",
      title: "Intermediate",
      description: "Expand your knowledge with advanced concepts and real-world applications.",
      icon: TrendingUp,
      gradient: "from-blue-400 to-blue-600",
      features: ["Project-based learning", "Industry best practices", "Portfolio building"],
      buttonText: "Continue Journey",
      featured: true,
    },
    {
      id: "advanced",
      title: "Advanced",
      description: "Master complex topics and become an expert in your field with cutting-edge resources.",
      icon: Crown,
      gradient: "from-purple-400 to-purple-600",
      features: ["Expert-level content", "Specialization paths", "Certification prep"],
      buttonText: "Master Skills",
      featured: false,
    },
  ];

  const handleLevelClick = (skillLevel: string) => {
    setLocation(`/resources?skillLevel=${skillLevel}`);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Learning Path</h2>
          <p className="text-xl text-muted-foreground">Start where you are, grow at your own pace</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillLevels.map((level, index) => {
            const IconComponent = level.icon;
            
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  className={`card-hover text-center border border-border shadow-lg ${
                    level.featured ? "transform scale-105 border-primary" : ""
                  }`}
                  data-testid={`card-skill-level-${level.id}`}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${level.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="text-white w-8 h-8" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4">{level.title}</h3>
                    
                    {level.featured && (
                      <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full inline-block mb-4">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <p className="text-muted-foreground mb-6">{level.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {level.features.map((feature) => (
                        <motion.div
                          key={feature}
                          className="flex items-center text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => handleLevelClick(level.id)}
                      className={`w-full py-3 rounded-lg transition-colors font-semibold ${
                        level.featured 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-accent text-accent-foreground hover:bg-accent/90"
                      }`}
                      data-testid={`button-${level.id}`}
                    >
                      {level.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
