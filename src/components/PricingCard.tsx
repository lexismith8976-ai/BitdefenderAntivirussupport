import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const liveChatLink = "https://getchatsupport.live/"; // Direct link

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
        plan.isPopular ? 'ring-4 ring-bitdefender-red transform scale-105' : ''
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-bitdefender-red text-white px-4 py-1 rounded-bl-lg flex items-center gap-1">
          <FaStar />
          <span className="font-semibold">Most Popular</span>
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold text-bitdefender-red">
            {plan.currency}{plan.price}
          </span>
          <span className="text-gray-500 ml-2">/{plan.period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Buy Now Button - Live Chat Link */}
        <motion.a
          href={liveChatLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`block w-full py-3 rounded-full font-semibold text-lg text-center transition-colors ${
            plan.isPopular
              ? 'bg-bitdefender-red text-white hover:bg-red-700'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {plan.ctaText}
        </motion.a>

        {/* Need Help Link */}
        <div className="mt-4 text-center">
          <a
            href={liveChatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-bitdefender-red hover:underline"
          >
            Need help choosing? Chat with us
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;