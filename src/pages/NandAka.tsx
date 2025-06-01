import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMessageSquare, 
  FiX, 
  FiCheck, 
  FiStar, 
  FiUsers,
  FiCode,
  FiSearch,
  FiRefreshCw,
  FiArrowRight
} from 'react-icons/fi';

// Styled components for the nand.aka page
type Product = {
  id: string;
  name: string;
  price: string | number;
  description: string;
  image: string;
};

type PricingCardProps = {
  title: string;
  price: string | number;
  period: string;
  description?: string;
  features: string[];
  buttonText?: string;
  isPopular?: boolean;
  className?: string;
  onSelect?: () => void;
};

const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Section = ({ children, id = '', className = '' }: { children: React.ReactNode; id?: string; className?: string }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <Container>
      {children}
    </Container>
  </section>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2';
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white',
    outline: 'border-2 border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white bg-transparent',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const PricingCard = ({
  title,
  price,
  period,
  description = '',
  features,
  buttonText = 'Get Started',
  isPopular = false,
  className = '',
  onSelect
}: PricingCardProps) => (
  <div className={`relative h-full flex flex-col ${className}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}
    <div className={`flex-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border ${isPopular ? 'border-cyan-500/50' : 'border-gray-800'} flex flex-col`}>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <FiCheck className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? 'secondary' : 'outline'} 
        className="w-full mt-auto"
        onClick={onSelect}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

const NandAka = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsPurchaseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <main>
        {/* Hero Section */}
        <Section id="hero" className="pt-32 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              NAND.AKA
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Connect with AI and human experts for personalized guidance and support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                className="group px-8 py-4 text-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" className="bg-gray-900/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Starter"
              price="9"
              period="month"
              description="Perfect for getting started"
              features={["10 AI queries/month", "Basic support", "Email assistance"]}
              isPopular={false}
              onSelect={() => handleProductSelect({
                id: 'starter',
                name: 'Starter Plan',
                price: '9',
                description: 'Perfect for getting started',
                image: '/images/plans/starter.jpg'
              })}
            />

            <PricingCard
              title="Pro"
              price="29"
              period="month"
              description="For power users"
              features={["50 AI queries/month", "Priority support", "1 human consultation"]}
              isPopular={true}
              onSelect={() => handleProductSelect({
                id: 'pro',
                name: 'Pro Plan',
                price: '29',
                description: 'For power users',
                image: '/images/plans/pro.jpg'
              })}
            />

            <PricingCard
              title="Enterprise"
              price="99"
              period="month"
              description="For teams and businesses"
              features={["Unlimited AI queries", "24/7 support", "5 human consultations"]}
              isPopular={false}
              onSelect={() => handleProductSelect({
                id: 'enterprise',
                name: 'Enterprise Plan',
                price: '99',
                description: 'For teams and businesses',
                image: '/images/plans/enterprise.jpg'
              })}
            />
          </div>
        </Section>
      </main>

      {/* Purchase Modal */}
      {isPurchaseModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-md w-full p-6 relative border border-gray-800">
            <button 
              onClick={() => setIsPurchaseModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FiX className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">Purchase {selectedProduct.name}</h3>
            <p className="text-gray-400 mb-6">{selectedProduct.description}</p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Plan</span>
                <span className="font-medium">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Price</span>
                <span className="text-2xl font-bold">${selectedProduct.price}<span className="text-sm text-gray-400">/month</span></span>
              </div>
            </div>
            
            <Button className="w-full">
              Purchase Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NandAka;
