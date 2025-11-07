import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Scissors, Calendar, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-r from-primary to-primary-light'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo Section */}
        <div 
          className={`flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
          onClick={() => navigate('/')}
        >
          <div className="relative">
            <img 
              src="/logo193.png" 
              alt="Beauty Parlour Logo" 
              className="w-12 h-12 rounded-full ring-2 ring-white/20 transition-all duration-300 hover:ring-4" 
            />
          </div>
          <span className="font-serif text-2xl font-bold tracking-wider">Beauty Parlour</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav 
          className={`${
            isMobileMenuOpen 
              ? 'flex flex-col fixed top-[72px] right-0 w-72 h-screen bg-white shadow-2xl p-6 gap-2' 
              : 'hidden'
          } md:flex md:flex-row md:items-center md:gap-2 md:static md:w-auto md:h-auto md:bg-transparent md:shadow-none md:p-0`}
        >
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
              scrolled 
                ? 'text-gray-700 hover:bg-primary/10 hover:text-primary md:text-gray-700' 
                : 'text-gray-700 md:text-white md:hover:bg-white/10'
            }`}
          >
            <Home size={18} />
            Home
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
              scrolled 
                ? 'text-gray-700 hover:bg-primary/10 hover:text-primary md:text-gray-700' 
                : 'text-gray-700 md:text-white md:hover:bg-white/10'
            }`}
          >
            <Scissors size={18} />
            Services
          </Link>
          <Link 
            to="/booking" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
              scrolled 
                ? 'text-gray-700 hover:bg-primary/10 hover:text-primary md:text-gray-700' 
                : 'text-gray-700 md:text-white md:hover:bg-white/10'
            }`}
          >
            <Calendar size={18} />
            Booking
          </Link>
          {!isLoggedIn ? (
            <Link 
              to="/login" 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-secondary-dark px-6 py-2.5 rounded-full font-bold ml-0 md:ml-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User size={18} />
              Login / Signup
            </Link>
          ) : (
            <>
              <Link 
                to="/account" 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-primary/10 hover:text-primary md:text-gray-700' 
                    : 'text-gray-700 md:text-white md:hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User size={18} />
                Account
              </Link>
              <button 
                onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-red-50 hover:text-red-600 md:text-gray-700' 
                    : 'text-gray-700 md:text-white md:hover:bg-white/10'
                }`}
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;