import { motion } from 'framer-motion';

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full overflow-y-auto flex items-center justify-center text-3xl font-bold text-gray-600"
    >
      {title} Page is Under Construction...
    </motion.div>
  );
}
