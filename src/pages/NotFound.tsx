import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-dark_1 text-white p-4"
    >
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
        
        <h2 className="text-2xl font-semibold text-foreground">
          Oops! Page Not Found
        </h2>
        
        <p className="text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          <FaHome />
          Return to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound; 