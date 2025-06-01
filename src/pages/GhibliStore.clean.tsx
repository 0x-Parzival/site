import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, PlusIcon, HomeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CustomDesignModal } from '../components/CustomDesignModal';
import { useMediaQuery } from 'react-responsive';
import QRCode from 'react-qr-code';

// Simple product types
const PRODUCT_TYPES = ['T-shirt', 'Cup', 'Notebook'];
type ProductType = string;

interface Product {
  id: number;
  instaId: string;
  type: ProductType;
  price: number;
  imageUrl: string;
}

// Using global Math object

interface CheckoutModalProps {
  product: Product | null;
  onClose: () => void;
  onSubmit: (upiId: string, address: string) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose, onSubmit }) => {
  const [upiId, setUpiId] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSubmit(upiId, address);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 w-full max-w-md border border-[#00d9ff]/20 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#00d9ff]">Complete Your Purchase</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mb-6 p-4 bg-black/30 rounded-lg border border-[#00d9ff]/10">
          <div className="flex gap-4 mb-4">
            <img 
              src={product.imageUrl} 
              alt={product.type}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <p className="text-sm text-[#00d9ff]">@{product.instaId}</p>
              <h4 className="text-lg font-semibold">{product.type}</h4>
              <p className="text-2xl font-bold text-[#00ffaa]">${product.price}</p>
            </div>
          </div>
          
          <div className="flex justify-center my-4">
            <div className="p-4 bg-white rounded-lg">
              <QRCode 
                value={`upi://pay?pa=your-upi-id@ybl&pn=Ghibli%20Store&am=${product.price}&cu=INR`}
                size={128}
                level="H"
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#00d9ff] mb-1">
                Your UPI ID
              </label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@upi"
                className="w-full px-4 py-2 bg-gray-800 border border-[#00d9ff]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#00d9ff] mb-1">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full delivery address"
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-[#00d9ff]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-[#00d9ff] to-[#00ffaa] text-black font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Confirm Order'}
            </button>
          </form>
        </div>
        
        <p className="text-xs text-center text-gray-400">
          Scan the QR code or use UPI ID: <span className="font-mono">your-upi-id@ybl</span>
        </p>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; onBuyNow: (product: Product) => void }> = ({ product, onBuyNow }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  
  return (
    <div className={`shrink-0 ${isMobile ? 'w-[280px]' : 'w-[320px]'} aspect-[16/9] bg-black/20 backdrop-blur-[2px] rounded-xl p-4
                 flex flex-col items-center gap-3 mx-1 sm:mx-2 border border-[#00d9ff]/10
                 shadow-[0_0_10px_#00d9ff22] transition-all duration-300
                 hover:transform hover:scale-105 hover:shadow-[0_0_30px_#00d9ffaa] hover:bg-black/30`}>
      <img
        src={product.imageUrl}
        alt={product.type}
        className="w-full h-24 sm:h-32 object-contain rounded-lg bg-black/20"
      />
      <p className="text-xs sm:text-sm text-[#ff00f7]/80 text-center">@{product.instaId}</p>
      <p className="font-['Orbitron'] text-base sm:text-lg text-[#00ffe7] text-center">
        {product.type} - ${product.price}
      </p>
      <button 
        onClick={() => onBuyNow(product)}
        className="w-full py-2 px-4 sm:px-6 bg-[#00d9ff] text-[#111128] font-bold rounded-full
                 transition-colors duration-300 hover:bg-[#00ffe7] text-sm sm:text-base"
      >
        Buy Now
      </button>
    </div>
  );
};

export const GhibliStore: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [showCustomDesign, setShowCustomDesign] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logo component at the top of the page
  const Logo = () => (
    <div className="flex justify-center mb-4 sm:mb-6">
      <img 
        src="/images/ghibli-logo.png" 
        alt="Ghibli Store Logo" 
        className="h-20 sm:h-24 md:h-32" 
      />
    </div>
  );

  const handleCustomDesignSubmit = (formData: FormData) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can implement your submission logic here
    // For now, we'll just close the modal
    setShowCustomDesign(false);
  };

  const handleCloseModal = () => {
    setShowCustomDesign(false);
  };

  // Generate products
  useEffect(() => {
    const generateProducts = () => {
      const result: any[] = [];
      
      for (let i = 0; i < 100; i++) {
        const typeIndex = i % PRODUCT_TYPES.length;
        // Access array elements safely with type assertion
        const productType = (PRODUCT_TYPES as any)[typeIndex];
        
        result[result.length] = {
          id: i + 1,
          instaId: `user${i + 1}_insta`,
          type: productType,
          price: 15 + (i % 20),
          imageUrl: `https://picsum.photos/seed/${i + 1}/300/200`,
        };
      }
      return result;
    };

    const products = generateProducts();
    setProducts(shuffleArray(products));
  }, []);

  // Simple shuffle array function with type-safe swapping
  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Use temporary variable for type-safe swap
      const temp = newArray[i];
      (newArray as any)[i] = newArray[j];
      (newArray as any)[j] = temp;
    }
    return newArray;
  };

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.instaId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-[#00ffe7] font-['Poppins'] flex flex-col relative z-10">
      {/* Header */}
      <header className="sticky top-0 bg-black/90 backdrop-blur-sm z-50 border-b border-[#00d9ff]/20 shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8">
          <div className="w-full sm:w-auto flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              {isMobile && (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-[#00d9ff]"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              )}
              <h1 className="text-xl sm:text-2xl font-['Orbitron'] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                GHIBLI STORE
              </h1>
            </div>
            {/* Home button removed as requested */}
          </div>

          <div className={`${isMobile && !isMenuOpen ? 'hidden' : 'w-full sm:w-auto'} transition-all duration-300`}>
            <div className="relative w-full sm:max-w-2xl">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#00d9ff]" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm sm:text-base bg-transparent border-2 border-[#00d9ff] rounded-full text-[#00ffe7]
                         placeholder:text-[#00d9ff]/60 outline-none transition-all duration-300
                         focus:border-[#ff00f7] focus:shadow-[0_0_15px_#ff00f7]"
              />
            </div>
            {isMobile && (
              <div className="mt-4">
                <button
                  onClick={() => navigate('/')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 font-['Orbitron'] text-[#00d9ff] font-bold border-2 border-[#00d9ff] rounded-lg
                           transition-all duration-300 hover:shadow-[0_0_12px_#00d9ff] hover:bg-[#00d9ff]/20 hover:text-white"
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Home</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        {/* Logo */}
        <Logo />
        
        {/* Custom Design Button */}
        <button
          onClick={() => setShowCustomDesign(true)}
          className="font-['Orbitron'] text-sm sm:text-lg md:text-2xl px-6 py-3 sm:px-10 sm:py-3 md:px-12 md:py-4 
                     text-[#ff00f7] border-2 sm:border-3 border-[#ff00f7] rounded-full
                     shadow-[0_0_10px_#ff00f7] sm:shadow-[0_0_20px_#ff00f7] transition-all duration-300 
                     hover:bg-[#ff00f7]/20 hover:shadow-[0_0_20px_#ff00f7] sm:hover:shadow-[0_0_40px_#ff00f7] 
                     flex items-center gap-2 sm:gap-3 z-10"
          type="button"
        >
          <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          <span>Create Custom Design</span>
        </button>

        <CustomDesignModal
          isOpen={showCustomDesign}
          onClose={handleCloseModal}
          onSubmit={handleCustomDesignSubmit}
        />
        
        <CheckoutModal
          product={selectedProduct}
          onClose={() => {
            setSelectedProduct(null);
            setShowCheckout(false);
          }}
          onSubmit={(upiId, address) => {
            console.log('Order submitted:', { upiId, address, product: selectedProduct });
            alert('Order placed successfully! We\'ll contact you soon.');
            setShowCheckout(false);
            setSelectedProduct(null);
          }}
        />

        {/* Sliding Products Rows */}
        <div className="w-full overflow-hidden">
          {/* First Row - Slides Left */}
          <div className="flex mb-4 sm:mb-8 animate-slideLeft">
            <div className="flex">
              {filteredProducts.slice(0, Math.ceil(filteredProducts.length / 2)).map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onBuyNow={(product) => {
                    setSelectedProduct(product);
                    setShowCheckout(true);
                  }}
                />
              ))}
            </div>
            <div className="flex">
              {filteredProducts.slice(0, filteredProducts.length / 2).map((product) => (
                <ProductCard 
                  key={`${product.id}-clone`} 
                  product={product}
                  onBuyNow={(product) => {
                    setSelectedProduct(product);
                    setShowCheckout(true);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Second Row - Slides Right */}
          <div className="flex mb-4 sm:mb-8 animate-slideRight">
            <div className="flex">
              {filteredProducts.slice(Math.ceil(filteredProducts.length / 2)).map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onBuyNow={(product) => {
                    setSelectedProduct(product);
                    setShowCheckout(true);
                  }}
                />
              ))}
            </div>
            <div className="flex">
              {filteredProducts.slice(Math.floor(filteredProducts.length / 2)).map((product) => (
                <ProductCard 
                  key={`${product.id}-clone`} 
                  product={product}
                  onBuyNow={(product) => {
                    setSelectedProduct(product);
                    setShowCheckout(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile-friendly touch area at bottom */}
        {isMobile && (
          <div className="h-16 w-full"></div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 bg-black/30 backdrop-blur-sm text-center">
        <button
          onClick={() => navigate('/whoami')}
          className="font-['Orbitron'] px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base text-[#ff00f7] border-2 border-[#ff00f7] rounded-full
                     shadow-[0_0_10px_#ff00f7] sm:shadow-[0_0_15px_#ff00f7] transition-all duration-300
                     hover:bg-[#ff00f7]/20 hover:shadow-[0_0_20px_#ff00f7] sm:hover:shadow-[0_0_40px_#ff00f7] flex items-center gap-2 mx-auto"
        >
          <span className="text-lg">👨‍💻</span>
          <span>Meet The Developer</span>
        </button>
      </footer>
    </div>
  );
};
