import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/constants';

const Features: React.FC = () => {
  const liveChatLink = "https://getchatsupport.live/";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Bitdefender?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience next-generation protection with our comprehensive security features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* 🔒 ICON - BILKUL FIXED, KOI ANIMATION NAHI */}
              <div className="text-6xl mb-4 text-bitdefender-red">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {/* Learn More - Live Chat Link */}
              <a
                href={liveChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-bitdefender-red font-semibold hover:gap-3 transition-all"
              >
                Learn More
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Start Free Trial - Live Chat Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={liveChatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bitdefender-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Start Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;