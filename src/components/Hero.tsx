import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const Hero: React.FC = () => {
  // YouTube video link - Replace with your actual video
  const youtubeVideoUrl = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-bitdefender-dark via-purple-900 to-bitdefender-red opacity-90" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-bitdefender-red rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Protect Your Digital World
          <span className="block text-bitdefender-red text-6xl md:text-8xl mt-4">
            With Bitdefender
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200"
        >
          Advanced cybersecurity for all your devices. Protect against malware, ransomware, 
          and online threats with our award-winning technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Get Started Now - Live Chat Link */}
          <motion.a
            href="https://getchatsupport.live/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-bitdefender-red text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
          >
            Get Started Now
            <FaArrowRight />
          </motion.a>

          {/* Watch Demo - YouTube Link */}
          <motion.a
            href={youtubeVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-bitdefender-dark transition-colors"
          >
            <FaPlayCircle />
            Watch Demo
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: '500M+', label: 'Protected Devices' },
            { number: '99.9%', label: 'Threat Detection' },
            { number: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-bitdefender-red mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;