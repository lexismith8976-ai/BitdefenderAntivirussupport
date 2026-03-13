import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pricingPlans } from '../data/constants';
import PricingCard from '../components/PricingCard';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      
      {/* Pricing Section Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include a 30-day money-back guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.slice(0, 3).map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/plans">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-bitdefender-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                View All Plans
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;