import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const footerSections = [
    {
      title: "Resources",
      links: [
        { name: "Browse Courses", href: "/resources" },
        { name: "Skill Paths", href: "/resources" },
        { name: "Certifications", href: "#" },
        { name: "Free Resources", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#", name: "Twitter" },
    { icon: "fab fa-linkedin", href: "#", name: "LinkedIn" },
    { icon: "fab fa-github", href: "#", name: "GitHub" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-2 mb-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                data-testid="footer-logo"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary-foreground w-5 h-5" />
                </div>
                <span className="text-xl font-bold">SkillBridge</span>
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-4">
              Empowering professionals with curated educational resources for continuous growth and career advancement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  <i className={`${social.icon} text-xl`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <motion.a
                        className="hover:text-primary transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                        data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                      >
                        {link.name}
                      </motion.a>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 SkillBridge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="link-terms">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="link-cookies">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
