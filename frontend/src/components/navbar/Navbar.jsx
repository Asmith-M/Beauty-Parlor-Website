import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-primary-light text-white sticky top-0 z-50 shadow-lg backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between p-4 min-h-[70px]">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105" onClick={() => navigate('/')}>
          <img src="/logo193.png" alt="Beauty Parlour Logo" className="w-12 h-12 rounded-full bg-white/10 p-1 transition-all duration-200 ease-in-out group-hover:bg-white/20" />
          <span className="font-serif text-2xl font-semibold tracking-wider">Beauty Parlour</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden bg-transparent border-none cursor-pointer p-2 z-50" onClick={toggleMobileMenu}>
          <span className={`block w-7 h-0.5 bg-white relative transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'bg-transparent' : ''}`}>
            <span className={`block w-7 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'transform rotate-45 top-0' : '-top-2'}`}></span>
            <span className={`block w-7 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'transform -rotate-45 bottom-0' : '-bottom-2'}`}></span>
          </span>
        </button>

        {/* Navigation Links */}
        <nav className={`flex items-center gap-2 ${isMobileMenuOpen ? 'flex-col absolute top-[70px] right-0 w-72 h-screen bg-gradient-to-r from-primary to-primary-light p-6 shadow-lg' : 'hidden md:flex'}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline px-4 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/10 font-medium text-sm">Home</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline px-4 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/10 font-medium text-sm">Services</Link>
          <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline px-4 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/10 font-medium text-sm">Booking</Link>
          {!isLoggedIn ? (
            <Link to="/login" className="bg-gradient-to-r from-secondary to-secondary-dark px-6 py-2 rounded-full font-bold ml-3 shadow-lg hover:from-secondary-dark hover:to-secondary transform hover:-translate-y-0.5 hover:shadow-xl" onClick={() => setIsMobileMenuOpen(false)}>
              Login / Signup
            </Link>
          ) : (
            <>
              <Link to="/account" className="text-white no-underline px-4 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/10 font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                Account
              </Link>
              <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/30 font-medium text-sm ml-2">
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