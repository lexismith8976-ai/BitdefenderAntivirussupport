import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBars, FaTimes, FaComment, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

  const Navbar: React.FC = () => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/plans', label: 'Plans' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isHomePage = location.pathname === '/';
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 
        isHomePage ? 'bg-transparent' : 'bg-gradient-to-r from-bitdefender-dark to-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaShieldAlt className={`text-3xl ${
                scrolled ? 'text-bitdefender-red' : 
                isHomePage ? 'text-white' : 'text-white'
              }`} />
            </motion.div>
            <span className={`font-bold text-xl ${
              scrolled ? 'text-gray-800' : 
              isHomePage ? 'text-white' : 'text-white'
            }`}>
              Bitdefender
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  scrolled 
                    ? location.pathname === item.path 
                      ? 'text-bitdefender-red' 
                      : 'text-gray-600 hover:text-bitdefender-red'
                    : location.pathname === item.path
                      ? 'text-white font-bold'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute left-0 right-0 h-0.5 bottom-[-5px] ${
                      scrolled ? 'bg-bitdefender-red' : 'bg-white'
                    }`}
                  />
                )}
              </Link>
            ))}

            {/* Account Section - Desktop */}
            {user ? (
              <div className="relative group">
                {/* ✅ BUTTON - for menu toggle (action) */}
                <button 
                  className={`flex items-center gap-2 focus:outline-none ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  aria-label="User menu"
                >
                  <FaUserCircle size={24} />
                  <span>{user.name.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      {user.email}
                    </div>
                    {/* ✅ LINK - navigation to account page */}
                    <button
                      onClick={() => {
                        closeMenu();
                        navigate('/account');
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      type="button"
                    >
                      My Account
                    </button>
                    {/* ✅ BUTTON - for logout action */}
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* ✅ LINK - navigation to login page */
              <button
                onClick={() => {
                  navigate('/login');
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
                  scrolled
                    ? 'bg-bitdefender-red text-white hover:bg-red-700'
                    : 'bg-white text-bitdefender-red hover:bg-gray-100'
                }`}
                type="button"
              >
                <FaUserCircle size={20} />
                Account
              </button>
            )}

            {/* ✅ ANCHOR - external navigation (correct) */}
            <button
              onClick={() => window.open('https://getchatsupport.live/', '_blank', 'noopener,noreferrer')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
                scrolled
                  ? 'bg-bitdefender-red text-white hover:bg-red-700'
                  : 'bg-white text-bitdefender-red hover:bg-gray-100'
              }`}
              type="button"
            >
              <FaComment />
              Chat Support
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden focus:outline-none ${
              scrolled ? 'text-gray-800' : 
              isHomePage ? 'text-white' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-lg shadow-xl mt-2 p-4"
          >
            {/* Navigation Links */}
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  closeMenu();
                  navigate(item.path);
                }}
                className={`block py-2 px-4 rounded-lg transition-colors w-full text-left ${
                  location.pathname === item.path
                    ? 'bg-bitdefender-red text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                type="button"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Account Section */}
            {user ? (
              <div className="border-t border-gray-200 my-2 pt-2">
                <div className="px-4 py-2 text-sm text-gray-700">
                  <FaUserCircle className="inline mr-2" />
                  {user.email}
                </div>
                {/* ✅ LINK - navigation to account page */}
                <button
                  onClick={() => {
                    closeMenu();
                    navigate('/account');
                  }}
                  className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
                  type="button"
                >
                  My Account
                </button>
                {/* ✅ BUTTON - for logout action */}
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="block w-full text-left py-2 px-4 text-red-600 hover:bg-gray-100 rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-200 my-2 pt-2">
                {/* ✅ LINK - navigation to login page */}
                <button
                  onClick={() => {
                    closeMenu();
                    navigate('/login');
                  }}
                  className="block py-2 px-4 bg-bitdefender-red text-white rounded-lg text-center font-semibold hover:bg-red-700 transition-colors w-full"
                  type="button"
                >
                  <FaUserCircle className="inline mr-2" />
                  Account
                </button>
              </div>
            )}

            {/* ✅ ANCHOR - external navigation (correct) */}
            <button
              onClick={() => {
                closeMenu();
                window.open('https://getchatsupport.live/', '_blank', 'noopener,noreferrer');
              }}
              className="block mt-2 py-2 px-4 bg-bitdefender-red text-white rounded-lg text-center font-semibold hover:bg-red-700 transition-colors w-full"
              type="button"
            >
              <FaComment className="inline mr-2" />
              Chat Support
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;