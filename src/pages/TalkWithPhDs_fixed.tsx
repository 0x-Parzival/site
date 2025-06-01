 import React from 'react';
import { FiCheck } from 'react-icons/fi';

// Define the PricingCardProps interface
interface PricingCardProps {
  title: string;
  price: number | string;
  period: string;
  description?: string;
  features: string[];
  buttonText?: string;
  isPopular?: boolean;
  className?: string;
  onSelect: () => void;
}

// Define the Button component
const Button = ({
  variant = 'primary',
  className = '',
  children,
  onClick
}: {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors';
  const variantClasses = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
    outline: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// PricingCard component

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

// ... (rest of the file remains the same)

// In the TalkWithPhDs component, update the PricingCard usages to use isPopular instead of popular
// Section component
const Section = ({ 
  children, 
  className = '',
  id
}: { 
  children: React.ReactNode, 
  className?: string,
  id?: string 
}) => (
  <section id={id} className={`py-20 px-4 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const TalkWithPhDs = () => {
  const handleProductSelect = (product: {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
  }) => {
    // Handle product selection logic here
    console.log('Selected product:', product);
  };
  // ... (previous state and handlers)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ... other components ... */}
      <main>
        {/* ... other sections ... */}
        <Section id="pricing" className="bg-gray-900">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price={9}
              period="month"
              description="Perfect for individuals getting started"
              features={["10 AI queries/month", "Basic support", "Email assistance"]}
              isPopular={false}
              onSelect={() => handleProductSelect({
                id: 'starter',
                name: 'Starter Plan',
                price: '9',
                description: 'Perfect for individuals getting started',
                image: '/images/plans/starter.jpg'
              })}
            />
            <PricingCard
              title="Pro"
              price={29}
              period="month"
              description="Ideal for professionals and small teams"
              features={["50 AI queries/month", "Priority support", "1 human consultation"]}
              isPopular={true}
              onSelect={() => handleProductSelect({
                id: 'pro',
                name: 'Pro Plan',
                price: '29',
                description: 'Ideal for professionals and small teams',
                image: '/images/plans/pro.jpg'
              })}
            />
            <PricingCard
              title="Enterprise"
              price={99}
              period="month"
              description="For teams and businesses with advanced needs"
              features={["Unlimited AI queries", "24/7 support", "5 human consultations"]}
              isPopular={false}
              onSelect={() => handleProductSelect({
                id: 'enterprise',
                name: 'Enterprise Plan',
                price: '99',
                description: 'For teams and businesses with advanced needs',
                image: '/images/plans/enterprise.jpg'
              })}
            />
          </div>
        </Section>
      </main>
      {/* ... other components ... */}
    </div>
  );
};

export default TalkWithPhDs;
