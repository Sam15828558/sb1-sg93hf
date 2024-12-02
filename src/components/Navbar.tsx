import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
            >
              SEO Summit
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#programme">Programme</NavLink>
              <NavLink href="#speakers">Speakers</NavLink>
              <NavLink href="#pricing">Tarifs</NavLink>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Réserver
              </Button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <NavLink href="#programme" mobile onClick={() => setIsMobileMenuOpen(false)}>
                Programme
              </NavLink>
              <NavLink href="#speakers" mobile onClick={() => setIsMobileMenuOpen(false)}>
                Speakers
              </NavLink>
              <NavLink href="#pricing" mobile onClick={() => setIsMobileMenuOpen(false)}>
                Tarifs
              </NavLink>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Réserver
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children, mobile, onClick }: { 
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-gray-300 hover:text-white transition-colors ${
        mobile ? 'text-2xl' : 'text-sm'
      }`}
    >
      {children}
    </a>
  );
}