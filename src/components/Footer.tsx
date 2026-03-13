import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Plans', path: '/plans' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/faq' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Community', path: '#' },
    { name: 'System Requirements', path: '#' },
    { name: 'Contact Support', path: '/contact' }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com/bitdefender', name: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com/bitdefender', name: 'Twitter' },
    { icon: FaLinkedin, url: 'https://linkedin.com/company/bitdefender', name: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://instagram.com/bitdefender', name: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com/bitdefender', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaShieldAlt className="text-3xl text-bitdefender-red" />
              <span className="font-bold text-xl">Bitdefender</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the way in cybersecurity innovation since 2001. Protecting millions of users worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-bitdefender-red transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-bitdefender-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-bitdefender-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Chat */}
          <div>
            <h4 className="text-lg font-bold mb-4">Need Help?</h4>
            <p className="text-gray-400 mb-4">
              Our support team is available 24/7 to assist you.
            </p>
            <motion.a
              href="https://getchatsupport.live/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-bitdefender-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Live Chat Now
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bitdefender. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/privacy" className="hover:text-bitdefender-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-bitdefender-red transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-bitdefender-red transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;