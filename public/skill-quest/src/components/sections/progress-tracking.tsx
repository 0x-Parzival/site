import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { UserProgress, Achievement, Resource, Category } from "@shared/schema";

export default function ProgressTracking() {
  const { data: progress = [] } = useQuery<UserProgress[]>({
    queryKey: ["/api/progress"],
  });

  const { data: achievements = [] } = useQuery<Achievement[]>({
    queryKey: ["/api/achievements"],
  });

  const { data: resources = [] } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  // Calculate category progress
  const categoryProgress = categories.slice(0, 4).map(category => {
    const categoryResources = resources.filter(r => r.categoryId === category.id);
    const categoryProgressData = progress.filter(p => 
      categoryResources.some(r => r.id === p.resourceId)
    );
    
    const avgProgress = categoryProgressData.length > 0 
      ? Math.round(categoryProgressData.reduce((sum, p) => sum + p.progress, 0) / categoryProgressData.length)
      : 0;

    return {
      name: category.name,
      progress: avgProgress,
      color: category.color,
    };
  });

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Track Your Progress</h2>
            <p className="text-xl text-muted-foreground">Visualize your learning journey and celebrate achievements</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Overall Progress */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Overall Progress</h3>
                    
                    <div className="space-y-6">
                      {categoryProgress.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          data-testid={`progress-category-${item.name.toLowerCase()}`}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">{item.name}</span>
                            <span style={{ color: item.color }}>{item.progress}%</span>
                          </div>
                          <Progress 
                            value={item.progress} 
                            className="h-3 progress-bar"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Recent Achievements</h3>
                    
                    <div className="space-y-4">
                      {achievements.slice(0, 3).map((achievement, index) => (
                        <motion.div
                          key={achievement.id}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center p-4 rounded-xl"
                          style={{ backgroundColor: `${achievement.color}10` }}
                          data-testid={`achievement-preview-${achievement.id}`}
                        >
                          <div 
                            className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                            style={{ backgroundColor: achievement.color }}
                          >
                            <i className={`${achievement.icon} text-white`} />
                          </div>
                          <div>
                            <div className="font-semibold">{achievement.title}</div>
                            <div className="text-sm text-muted-foreground">{achievement.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
