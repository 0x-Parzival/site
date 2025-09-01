// Mock data for development - this will be replaced by API calls
export const mockCategories = [
  { id: "1", name: "Programming", slug: "programming", icon: "fas fa-code", color: "hsl(221 83% 53%)" },
  { id: "2", name: "Design", slug: "design", icon: "fas fa-palette", color: "hsl(281 83% 53%)" },
  { id: "3", name: "Marketing", slug: "marketing", icon: "fas fa-bullhorn", color: "hsl(21 83% 53%)" },
  { id: "4", name: "Business", slug: "business", icon: "fas fa-briefcase", color: "hsl(142 76% 36%)" },
  { id: "5", name: "Data Science", slug: "data-science", icon: "fas fa-chart-bar", color: "hsl(201 83% 53%)" },
  { id: "6", name: "Leadership", slug: "leadership", icon: "fas fa-users", color: "hsl(45 83% 53%)" },
];

export const mockResources = [
  {
    id: "1",
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript with interactive exercises and real-world projects.",
    categoryId: "1",
    skillLevel: "beginner",
    duration: 12,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=240",
    tags: ["javascript", "programming", "web-development"],
  },
  {
    id: "2",
    title: "UI/UX Design Principles",
    description: "Learn design thinking and create beautiful, user-centered interfaces.",
    categoryId: "2",
    skillLevel: "intermediate",
    duration: 18,
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=240",
    tags: ["ui", "ux", "design", "figma"],
  },
  // Add more mock resources as needed
];

export const skillLevelColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-blue-100 text-blue-800",
  advanced: "bg-purple-100 text-purple-800",
};
