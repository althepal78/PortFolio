import { Link } from 'react-router-dom';
import { SocialLinks } from './';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full object-cover mr-3" />
              <span className="text-xl font-semibold">Albert Cardona</span>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 md:mr-8">
              <Link to="/" className="hover:text-[var(--knicks-orange)]">Home</Link>
              <Link to="/about" className="hover:text-[var(--knicks-orange)]">About</Link>
              <Link to="/projects" className="hover:text-[var(--knicks-orange)]">Projects</Link>
              <Link to="/contact" className="hover:text-[var(--knicks-orange)]">Contact</Link>
            </div>
            
            <SocialLinks className="text-white" />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">&copy; {currentYear} Albert Cardona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;