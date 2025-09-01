import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Browse Resources", href: "/resources" },
    { name: "Skill Paths", href: "/resources" },
    { name: "Progress", href: "/progress" },
    { name: "Community", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="text-primary-foreground w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SkillBridge
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.a
                  data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}
                  className={`transition-colors ${
                    location === item.href 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
              </Link>
            ))}
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              data-testid="button-sign-in"
              className="hover:bg-secondary"
            >
              Sign In
            </Button>
            <Button 
              data-testid="button-get-started"
              className="bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary-foreground w-5 h-5" />
                </div>
                <span className="text-xl font-bold">SkillBridge</span>
              </div>
              
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-lg"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-link-${item.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
                
                <div className="border-t pt-4 space-y-2">
                  <Button variant="outline" className="w-full" data-testid="mobile-button-sign-in">
                    Sign In
                  </Button>
                  <Button className="w-full" data-testid="mobile-button-get-started">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
