import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


interface ButtonProps {
  label: string;
  path: string;
  color: string;
  image: string;
  logo?: string;
}

const Button = ({ label, path, color, image, logo }: ButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(path);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-white/20 dark:hover:ring-white/20"
      onClick={handleButtonClick}
      style={{
        width: '300px',
        height: '150px',
        border: '2px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 30
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-75" style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(2px) brightness(0.9)'
      }} />
      <div className={`absolute inset-0 ${color} opacity-75 mix-blend-multiply`} />
      <div className="relative px-4 py-4 text-white text-lg font-black uppercase tracking-wider text-center dark:text-white" style={{
        zIndex: 40
      }}>
        <div className="text-2xl">{`${label}`.toUpperCase()}</div>
        <div className="text-base opacity-75 dark:opacity-100">EXPLORE NOW</div>
        {logo && (
          <img 
            src={logo} 
            alt={`${label} logo`} 
            className="w-12 h-12 absolute bottom-4 left-4"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
              zIndex: 50
            }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black/20 dark:bg-white/10" />
    </div>
  );
};

const buttons: ButtonProps[] = [
  {
    label: 'Who am I',
    path: '/whoami',
    color: 'from-pink-600 to-purple-700',
    image: '/images/who am i.jpg'
  },
  {
    label: 'Who is She',
    path: '/whoishe',
    color: 'from-purple-600 to-indigo-700',
    image: '/images/who am i.jpg'  // Using same image as whoami for now
  },
  {
    label: 'Spirituality',
    path: '/spirituality',
    color: 'from-indigo-600 to-blue-700',
    image: '/images/spirituality.jpg'  // You might want to add this image
  },
  {
    label: 'AECH',
    path: '/aech',
    color: 'from-blue-600 to-cyan-700',
    image: '/images/aech.png'
  },
  {
    label: 'Gesture',
    path: '/gesture',
    color: 'from-cyan-600 to-teal-700',
    image: '/images/gesture.png',
    logo: '/images/gesture-logo.png'
  },
  {
    label: 'Ghibli Store',
    path: '/ghibli-store',
    color: 'from-teal-600 to-green-700',
    image: '/images/ghibli.jpg'  // You might want to add this image
  },
  {
    label: 'Talk with PhDs',
    path: '/talk-with-phds',
    color: 'from-green-600 to-lime-600',
    image: '/images/talk.jpg'  // You might want to add this image
  },
  {
    label: 'Nand Aka',
    path: '/nand.aka',
    color: 'from-lime-600 to-yellow-600',
    image: '/images/nand.jpg'  // You might want to add this image
  },
  {
    label: 'Dev Dat',
    path: '/dev-dat',
    color: 'from-yellow-600 to-amber-600',
    image: '/images/dev.jpg'  // You might want to add this image
  },
  {
    label: 'Data Treya',
    path: '/data-treya',
    color: 'from-amber-600 to-orange-600',
    image: '/images/data.jpg'  // You might want to add this image
  },
  {
    label: 'Experts Talk',
    path: '/experts-talk',
    color: 'from-orange-600 to-red-600',
    image: '/images/experts.jpg'  // You might want to add this image
  },
  {
    label: 'Kalki OS',
    path: '/kalkios',
    color: 'from-red-600 to-pink-600',
    image: '/images/kalki os.png'
  },
  {
    label: 'Gesture AI',
    path: '/gesture-ai',
    color: 'from-pink-600 to-rose-600',
    image: '/images/gesture.png',
    logo: '/images/gesture-logo.png'
  },
  {
    label: 'Tantra Meditations',
    path: '/tantra-meditations',
    color: 'from-rose-600 to-purple-600',
    image: '/images/meditation.jpg'  // You might want to add this image
  },
  {
    label: 'AI Agency',
    path: '/ai-agency',
    color: 'from-blue-500 to-indigo-700',
    image: '/images/ai-agency.jpg'  // You might want to add this image
  }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-y-auto relative">
      <div className="text-center text-white py-4 relative z-10">
        <motion.h1 
          className="text-4xl font-black uppercase tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textShadow: '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '0.2em',
            backgroundSize: '200% auto',
            animation: 'gradient 8s linear infinite'
          }}
        >
          <span className="inline-block animate-pulse">[</span>
          SPIRITUALAI.ORG
          <span className="inline-block animate-pulse">]</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400 mt-2 font-light tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-cyan-400">[</span>
          <span className="text-purple-400">SYSTEM</span>
          <span className="text-cyan-400">]</span>
          <span className="text-gray-400"> INITIALIZING NEURAL INTERFACE</span>
        </motion.p>
      </div>
      <div className="relative z-10 p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {buttons
            .filter(button => ![
              'Who is She', 
              'Nand Aka', 
              'Dev Dat', 
              'Experts Talk', 
              'Talk with PhDs', 
              'Tantra Meditations'
            ].includes(button.label))
            .map((button, index) => (
              <motion.div 
                key={index} 
                className="w-full max-w-xs transform transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Button {...button} />
              </motion.div>
            ))}
        </div>
      </div>
      
      {/* Extra spacing at the bottom */}
      <div className="mt-20 py-16 w-full relative z-10">
        {/* Empty div for spacing */}
      </div>
    </div>
  );
}
