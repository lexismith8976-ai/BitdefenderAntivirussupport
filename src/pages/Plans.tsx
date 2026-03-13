import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaShieldAlt, FaLock, FaGlobe, FaMobile, FaCloud, FaHeadset, FaInfinity, FaUsers, FaBuilding } from 'react-icons/fa';

const Plans: React.FC = () => {
  const liveChatLink = "https://getchatsupport.live/";
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic Security',
      price: 29.99,
      period: 'year',
      devices: 1,
      features: [
        'Real-time Antivirus Protection',
        'Anti-phishing & Anti-fraud',
        'Advanced Firewall',
        'Email Support',
        'Automatic Updates',
        'Basic Threat Detection'
      ],
      icon: <FaShieldAlt className="text-3xl" />,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'premium',
      name: 'Premium Security',
      price: 49.99,
      period: 'year',
      devices: 3,
      isPopular: true,
      features: [
        'Everything in Basic',
        'VPN Protection (200MB/day)',
        'Password Manager',
        'Parental Controls',
        'Webcam Protection',
        '24/7 Priority Support',
        'Multi-layer Ransomware Protection',
        'Social Network Protection'
      ],
      icon: <FaLock className="text-3xl" />,
      color: 'from-bitdefender-red to-red-700'
    },
    {
      id: 'ultimate',
      name: 'Ultimate Security',
      price: 89.99,
      period: 'year',
      devices: 10,
      features: [
        'Everything in Premium',
        'Unlimited VPN',
        'Identity Theft Protection',
        'Secure Backup (2GB)',
        'File Encryption',
        'Dedicated Account Manager',
        'Priority Technical Support',
        'Dark Web Monitoring',
        'Privacy Scanner'
      ],
      icon: <FaGlobe className="text-3xl" />,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'family',
      name: 'Family Pack',
      price: 119.99,
      period: 'year',
      devices: 15,
      features: [
        'Everything in Ultimate',
        'Parental Controls for Kids',
        'Location Tracking',
        'Screen Time Management',
        'Content Filtering',
        'Activity Reports',
        'Geofencing',
        'App Blocking',
        'Family Safety Dashboard'
      ],
      icon: <FaUsers className="text-3xl" />,
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'business',
      name: 'Business Premium',
      price: 199.99,
      period: 'year',
      devices: 25,
      features: [
        'Everything in Ultimate',
        'Central Management Console',
        'Endpoint Detection & Response',
        'Patch Management',
        'Device Control',
        'Data Loss Prevention',
        'Advanced Reporting',
        'SIEM Integration',
        '24/7 Business Support'
      ],
      icon: <FaBuilding className="text-3xl" />,
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Suite',
      price: 399.99,
      period: 'year',
      devices: 50,
      features: [
        'Everything in Business',
        'Advanced Threat Intelligence',
        'Security Orchestration',
        'Incident Response',
        'Compliance Management',
        'Dedicated Security Team',
        'Custom Integrations',
        'SLA Guarantee',
        'On-premise Option'
      ],
      icon: <FaInfinity className="text-3xl" />,
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bitdefender-dark to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Choose Your Perfect
            <span className="block text-bitdefender-red">Protection Plan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From individual to enterprise, we have a plan for everyone
          </motion.p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.isPopular ? 'ring-4 ring-bitdefender-red transform scale-105 z-10' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-bitdefender-red text-white px-6 py-2 rounded-bl-lg font-bold">
                    MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {plan.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-sm opacity-90 block">/{plan.period}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="opacity-90">{plan.devices} {plan.devices === 1 ? 'device' : 'devices'}</p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6 max-h-64 overflow-y-auto custom-scrollbar">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="space-y-3">
                    <motion.a
                      href={liveChatLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full py-3 rounded-full font-semibold text-white text-center transition-colors bg-gradient-to-r ${plan.color} hover:opacity-90`}
                    >
                      Choose Plan
                    </motion.a>
                    <a
                      href={liveChatLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-bitdefender-red font-semibold hover:underline text-sm"
                    >
                      Need help? Live Chat
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;