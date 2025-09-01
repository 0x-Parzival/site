import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/ui/progress-bar";
import { useQuery } from "@tanstack/react-query";
import type { Resource, Category, UserProgress } from "@shared/schema";

interface ResourceCardProps {
  resource: Resource;
  category?: Category;
}

export default function ResourceCard({ resource, category }: ResourceCardProps) {
  const { data: userProgress = [] } = useQuery<UserProgress[]>({
    queryKey: ["/api/progress"],
  });

  const progress = userProgress.find(p => p.resourceId === resource.id)?.progress || 0;

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getActionText = () => {
    if (progress === 0) return "Start Course →";
    if (progress >= 100) return "Review →";
    if (progress > 80) return "Complete →";
    return "Continue Learning →";
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      data-testid={`card-resource-${resource.id}`}
    >
      <Card className="card-hover overflow-hidden border border-border shadow-lg h-full">
        <div className="relative">
          <img 
            src={resource.imageUrl} 
            alt={resource.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            {category && (
              <Badge 
                variant="outline" 
                className="text-xs font-semibold"
                style={{ color: category.color, borderColor: category.color }}
                data-testid={`badge-category-${category.slug}`}
              >
                {category.name}
              </Badge>
            )}
            <Badge 
              variant="outline" 
              className={`text-xs font-semibold ${getSkillLevelColor(resource.skillLevel)}`}
              data-testid={`badge-skill-${resource.skillLevel}`}
            >
              {resource.skillLevel}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold mb-2" data-testid={`title-${resource.id}`}>
            {resource.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2" data-testid={`description-${resource.id}`}>
            {resource.description}
          </p>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span data-testid={`progress-percentage-${resource.id}`}>{progress}%</span>
            </div>
            <ProgressBar value={progress} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              <span data-testid={`duration-${resource.id}`}>{resource.duration} hours</span>
            </div>
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80 font-semibold p-0 h-auto"
              data-testid={`button-action-${resource.id}`}
            >
              {getActionText()}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
