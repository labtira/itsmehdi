import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home', icon: <i className="fas fa-home text-xl flex items-center justify-center w-full h-full" /> },
    { path: '/projects', label: 'Projects', icon: <i className="fas fa-diagram-project text-xl flex items-center justify-center w-full h-full" /> },
    { path: '/contact', label: 'Contact', icon: <i className="fas fa-envelope text-xl flex items-center justify-center w-full h-full" /> }
  ];

  return (
    <nav className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30 border rounded-3xl border-[#222222] shadow-[0_-8px_32px_rgba(0,0,0,0.12)] w-[calc(100%-30px)] max-w-[400px] my-[15px] `}>
      <div className="max-w-[400px] mx-auto px-4 py-3">
        <div className="flex items-center justify-around w-full gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex-1 flex items-center justify-center mx-6 rounded-xl font-medium transition-all duration-300 ease-out group focus:outline-none ${location.pathname === link.path ? 'text-white' : 'text-zinc-400 [@media(hover:hover)]:hover:text-white'}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className={`flex justify-center items-center p-3 w-[60px] h-[60px] rounded-xl transition-all duration-300 ease-out ${location.pathname === link.path ? 'bg-white text-black backdrop-blur-md shadow-[0_4px_12px_rgba(255,255,255,0.05)]' : '[@media(hover:hover)]:group-hover:bg-white/5'}`}>
                {link.icon} 
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;