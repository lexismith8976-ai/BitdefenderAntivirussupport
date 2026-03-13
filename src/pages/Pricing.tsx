import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../data/constants';
import PricingCard from '../components/PricingCard';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const comparisonFeatures = [
    'Real-time Antivirus',
    'Anti-phishing',
    'Firewall',
    'VPN Protection',
    'Password Manager',
    'Parental Controls',
    'Identity Theft Protection',
    'Secure Backup',
    '24/7 Priority Support'
  ];

  const planFeatures = {
    basic: [true, true, true, false, false, false, false, false, false],
    premium: [true, true, true, true, true, true, false, false, true],
    ultimate: [true, true, true, true, true, true, true, true, true]
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bitdefender-dark to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Choose Your
            <span className="block text-bitdefender-red">Protection Plan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Flexible plans for every need. All plans include a 30-day money-back guarantee.
          </motion.p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-bitdefender-red font-bold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-300 rounded-full p-1 transition-colors"
            >
              <motion.div
                layout
                className={`w-6 h-6 bg-bitdefender-red rounded-full ${
                  billingCycle === 'yearly' ? 'ml-8' : 'ml-0'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-bitdefender-red font-bold' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={{
                  ...plan,
                  price: billingCycle === 'monthly' ? Number((plan.price / 12).toFixed(2)) : plan.price
                }}
                index={index}
              />
            ))}
          </div>

          {/* Live Chat CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing a Plan?</h3>
            <p className="mb-6 opacity-90">
              Our support team is available 24/7 to help you find the perfect plan for your needs.
            </p>
            <a
              href="https://getchatsupport.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Chat with Us Now
            </a>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Compare Plans
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left">Features</th>
                    <th className="p-4 text-center">Basic</th>
                    <th className="p-4 text-center">Premium</th>
                    <th className="p-4 text-center">Ultimate</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-4 font-medium">{feature}</td>
                      <td className="p-4 text-center">
                        {planFeatures.basic[index] ? (
                          <FaCheck className="mx-auto text-green-500" />
                        ) : (
                          <FaTimes className="mx-auto text-red-500" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {planFeatures.premium[index] ? (
                          <FaCheck className="mx-auto text-green-500" />
                        ) : (
                          <FaTimes className="mx-auto text-red-500" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {planFeatures.ultimate[index] ? (
                          <FaCheck className="mx-auto text-green-500" />
                        ) : (
                          <FaTimes className="mx-auto text-red-500" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;