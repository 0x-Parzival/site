import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Download, Cpu, Zap, Shield, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VantaBackground from "@/components/ui/vanta-background";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "KALKI OS";
  
  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 200);

    return () => clearInterval(typeInterval);
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "AI-First Architecture",
      description: "Built-in AI tools and intelligent system optimization from kernel to userland.",
      color: "var(--neon-cyan)"
    },
    {
      icon: Terminal,
      title: "Developer-Centric",
      description: "Pre-configured with cutting-edge development tools and environments.",
      color: "var(--neon-green)"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized for speed with minimal bloat and maximum efficiency.",
      color: "var(--neon-purple)"
    },
    {
      icon: Shield,
      title: "Security Hardened",
      description: "Enterprise-grade security with advanced threat detection capabilities.",
      color: "var(--neon-pink)"
    }
  ];

  const specs = [
    { label: "KERNEL", value: "Linux 6.8+" },
    { label: "INIT", value: "systemd" },
    { label: "SHELL", value: "zsh/fish" },
    { label: "DESKTOP", value: "Custom WM" },
    { label: "PACKAGE", value: "apt/snap" },
    { label: "ARCH", value: "x86_64/arm64" }
  ];

  return (
    <div className="min-h-screen cyber-grid">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass-panel backdrop-blur-md"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 neon-border rounded flex items-center justify-center">
              <Terminal className="w-6 h-6 neon-text" />
            </div>
            <span className="font-cyber text-xl neon-text">KALKI OS</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#download" className="text-foreground hover:text-primary transition-colors">Download</a>
            <a href="#docs" className="text-foreground hover:text-primary transition-colors">Docs</a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
          </div>

          <Button className="cyber-button px-6 py-2" data-testid="button-download">
            GET KALKI
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <VantaBackground>
        <section className="hero-cyber min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-cyber neon-text mb-6 pulse-neon"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-pixel"
            >
              The AI-First Linux Distribution for Engineers
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="cyber-button px-8 py-4" data-testid="button-download-hero">
                <Download className="mr-2 w-5 h-5" />
                DOWNLOAD NOW
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-panel border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                data-testid="button-live-demo"
              >
                <Terminal className="mr-2 w-5 h-5" />
                LIVE DEMO
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="terminal max-w-2xl mx-auto"
            >
              <div className="terminal-header">root@kalki:~#</div>
              <div className="space-y-2 text-left">
                <div>$ curl -fsSL https://get.kalki.dev | bash</div>
                <div className="text-neon-cyan">→ Installing Kalki OS...</div>
                <div className="text-neon-green">→ AI modules loaded successfully</div>
                <div className="text-neon-purple">→ System ready for deployment</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </VantaBackground>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-cyber neon-text mb-4">CORE_FEATURES</h2>
            <p className="text-xl text-muted-foreground font-pixel">Engineered for the future of development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-card h-full text-center p-6">
                    <CardContent className="p-0">
                      <div 
                        className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center neon-glow"
                        style={{ backgroundColor: `${feature.color}20`, border: `2px solid ${feature.color}` }}
                      >
                        <IconComponent className="w-8 h-8" style={{ color: feature.color }} />
                      </div>
                      <h3 className="text-xl font-cyber mb-3" style={{ color: feature.color }}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground font-pixel text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Specs */}
      <section className="py-20 bg-gradient-to-r from-background via-muted to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-cyber neon-text mb-4">SYSTEM_SPECS</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {specs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="font-cyber text-sm text-neon-cyan mb-2">{spec.label}</div>
                      <div className="font-pixel text-lg text-foreground">{spec.value}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-cyber neon-text mb-6">READY_TO_DEPLOY?</h2>
            <p className="text-xl text-muted-foreground mb-8 font-pixel">
              Join the revolution of AI-powered development
            </p>
            
            <div className="space-y-4 mb-8">
              <Button size="lg" className="cyber-button w-full sm:w-auto px-12 py-4" data-testid="button-download-iso">
                <Download className="mr-2 w-5 h-5" />
                DOWNLOAD ISO (2.1GB)
              </Button>
              <div className="text-sm text-muted-foreground font-pixel">
                Latest: v1.0.0-alpha | Released: 2024-01-15
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <Card className="glass-panel p-4">
                <h4 className="font-cyber text-neon-green mb-2">Minimum Requirements</h4>
                <ul className="text-sm font-pixel space-y-1 text-muted-foreground">
                  <li>• 4GB RAM</li>
                  <li>• 20GB Storage</li>
                  <li>• x86_64 CPU</li>
                  <li>• UEFI Support</li>
                </ul>
              </Card>
              <Card className="glass-panel p-4">
                <h4 className="font-cyber text-neon-purple mb-2">Recommended</h4>
                <ul className="text-sm font-pixel space-y-1 text-muted-foreground">
                  <li>• 16GB+ RAM</li>
                  <li>• 100GB+ SSD</li>
                  <li>• Multi-core CPU</li>
                  <li>• GPU (CUDA/OpenCL)</li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Terminal className="w-6 h-6 neon-text" />
              <span className="font-cyber text-neon-text">KALKI OS</span>
            </div>
            <div className="text-sm text-muted-foreground font-pixel">
              © 2024 Kalki Project. Open Source. MIT License.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
