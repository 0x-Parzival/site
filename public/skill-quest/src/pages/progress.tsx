import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { UserProgress, Achievement, Resource, Category } from "@shared/schema";

export default function ProgressPage() {
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
  const categoryProgress = categories.map(category => {
    const categoryResources = resources.filter(r => r.categoryId === category.id);
    const categoryProgressData = progress.filter(p => 
      categoryResources.some(r => r.id === p.resourceId)
    );
    
    const avgProgress = categoryProgressData.length > 0 
      ? Math.round(categoryProgressData.reduce((sum, p) => sum + p.progress, 0) / categoryProgressData.length)
      : 0;

    return {
      category,
      progress: avgProgress,
      resourceCount: categoryResources.length,
      completedCount: categoryProgressData.filter(p => p.progress >= 100).length,
    };
  });

  const overallProgress = Math.round(
    progress.reduce((sum, p) => sum + p.progress, 0) / Math.max(progress.length, 1)
  );

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
              <h1 className="text-5xl font-bold mb-4">Your Learning Progress</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track your journey and celebrate your achievements
              </p>
            </motion.div>

            {/* Overall Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary" data-testid="text-overall-progress">
                    {overallProgress}%
                  </div>
                  <div className="text-muted-foreground">Overall Progress</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent" data-testid="text-completed-courses">
                    {progress.filter(p => p.progress >= 100).length}
                  </div>
                  <div className="text-muted-foreground">Completed Courses</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600" data-testid="text-achievements">
                    {achievements.length}
                  </div>
                  <div className="text-muted-foreground">Achievements</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-600" data-testid="text-hours-learned">
                    {Math.round(progress.reduce((sum, p) => {
                      const resource = resources.find(r => r.id === p.resourceId);
                      return sum + (resource ? (resource.duration * p.progress / 100) : 0);
                    }, 0))}
                  </div>
                  <div className="text-muted-foreground">Hours Learned</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Detailed Progress */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Category Progress */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Category Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {categoryProgress.map((item) => (
                      <div key={item.category.id}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            <i className={`${item.category.icon} text-lg`} style={{ color: item.category.color }} />
                            <span className="font-semibold">{item.category.name}</span>
                          </div>
                          <div className="text-right text-sm">
                            <div className="font-semibold" style={{ color: item.category.color }}>
                              {item.progress}%
                            </div>
                            <div className="text-muted-foreground">
                              {item.completedCount}/{item.resourceCount} courses
                            </div>
                          </div>
                        </div>
                        <Progress 
                          value={item.progress} 
                          className="h-3"
                          data-testid={`progress-${item.category.slug}`}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {achievements.map((achievement) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-4 rounded-xl border cursor-pointer"
                        style={{ backgroundColor: `${achievement.color}10` }}
                        data-testid={`achievement-${achievement.id}`}
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
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Course Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {progress.map((item) => {
                      const resource = resources.find(r => r.id === item.resourceId);
                      const category = categories.find(c => c.id === resource?.categoryId);
                      
                      if (!resource) return null;

                      return (
                        <motion.div
                          key={item.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 border rounded-xl"
                          data-testid={`course-progress-${resource.id}`}
                        >
                          <div className="flex items-start gap-4">
                            <img 
                              src={resource.imageUrl} 
                              alt={resource.title}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1">{resource.title}</h3>
                              <div className="flex items-center gap-2 mb-3">
                                {category && (
                                  <Badge variant="outline" className="text-xs">
                                    {category.name}
                                  </Badge>
                                )}
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${
                                    resource.skillLevel === 'beginner' ? 'bg-green-100 text-green-800' :
                                    resource.skillLevel === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                                    'bg-purple-100 text-purple-800'
                                  }`}
                                >
                                  {resource.skillLevel}
                                </Badge>
                              </div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Progress</span>
                                <span className="font-semibold">{item.progress}%</span>
                              </div>
                              <Progress value={item.progress} className="h-2" />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
