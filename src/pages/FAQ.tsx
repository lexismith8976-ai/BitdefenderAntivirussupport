import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown, 
  FaSearch, 
  FaShieldAlt, 
  FaLock, 
  FaMobile,
  FaCreditCard,
  FaHeadset,
  FaVideo,
  FaDownload,
  FaSync,
  FaUser,
  FaCog,
  FaQuestionCircle
} from 'react-icons/fa';
import toast from 'react-hot-toast';

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions', icon: <FaQuestionCircle />, count: 28 },
    { id: 'general', name: 'General', icon: <FaShieldAlt />, count: 8 },
    { id: 'security', name: 'Security', icon: <FaLock />, count: 6 },
    { id: 'billing', name: 'Billing', icon: <FaCreditCard />, count: 5 },
    { id: 'technical', name: 'Technical', icon: <FaMobile />, count: 5 },
    { id: 'account', name: 'Account', icon: <FaUser />, count: 4 }
  ];

  const faqs = [
    // General Questions (8)
    {
      id: 1,
      category: 'general',
      question: 'What is Bitdefender Antivirus?',
      answer: 'Bitdefender is a comprehensive cybersecurity solution that protects your devices from malware, ransomware, phishing, and other online threats. It uses advanced AI and machine learning to provide real-time protection across all your devices.',
      helpful: 234,
      views: 1250
    },
    {
      id: 2,
      category: 'general',
      question: 'How does Bitdefender protect my devices?',
      answer: 'Bitdefender uses multiple layers of protection including real-time threat detection, behavioral analysis, cloud-based scanning, and automatic updates. Our advanced algorithms detect and block threats before they can harm your system.',
      helpful: 189,
      views: 890
    },
    {
      id: 3,
      category: 'general',
      question: 'Is Bitdefender compatible with my operating system?',
      answer: 'Bitdefender supports Windows 10/11, macOS 10.15+, Android 8+, and iOS 14+. We also offer specialized versions for Linux servers and business environments.',
      helpful: 156,
      views: 2340
    },
    {
      id: 4,
      category: 'general',
      question: 'How often does Bitdefender update?',
      answer: 'Bitdefender updates automatically multiple times per day to ensure protection against the latest threats. You can also manually check for updates in the settings.',
      helpful: 98,
      views: 567
    },
    {
      id: 5,
      category: 'general',
      question: 'Can I use Bitdefender on multiple devices?',
      answer: 'Yes! Depending on your plan, you can protect 1, 3, 5, 10, or more devices. Premium plans allow you to protect different platforms including Windows, Mac, Android, and iOS.',
      helpful: 167,
      views: 890
    },
    {
      id: 6,
      category: 'general',
      question: 'Does Bitdefender have a free version?',
      answer: 'Yes, Bitdefender offers a free antivirus version with basic protection. However, premium plans offer advanced features like VPN, parental controls, and ransomware protection.',
      helpful: 234,
      views: 3456
    },
    {
      id: 7,
      category: 'general',
      question: 'How do I install Bitdefender?',
      answer: 'After purchase, download the installer from your Bitdefender Central account. Run the installer and follow the on-screen instructions. The process takes less than 5 minutes.',
      helpful: 145,
      views: 678
    },
    {
      id: 8,
      category: 'general',
      question: 'What languages does Bitdefender support?',
      answer: 'Bitdefender supports over 20 languages including English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Chinese, and more.',
      helpful: 67,
      views: 234
    },
    
    // Security Questions (6)
    {
      id: 9,
      category: 'security',
      question: 'Does Bitdefender include VPN protection?',
      answer: 'Yes! Premium and Ultimate plans include VPN protection. Premium includes 200MB/day per device, while Ultimate includes unlimited VPN traffic with access to multiple server locations worldwide.',
      helpful: 345,
      views: 4567
    },
    {
      id: 10,
      category: 'security',
      question: 'How effective is Bitdefender against ransomware?',
      answer: 'Bitdefender has a 99.9% detection rate against ransomware and uses multi-layer ransomware protection. Our Advanced Threat Defense technology prevents unauthorized encryption of your files and can automatically restore affected files.',
      helpful: 278,
      views: 3120
    },
    {
      id: 11,
      category: 'security',
      question: 'Does Bitdefender include a firewall?',
      answer: 'Yes, all Bitdefender plans include an advanced firewall that monitors network traffic, prevents unauthorized access, and protects against network-based attacks.',
      helpful: 167,
      views: 1890
    },
    {
      id: 12,
      category: 'security',
      question: 'Can Bitdefender detect zero-day threats?',
      answer: 'Yes, Bitdefender uses advanced machine learning and behavioral analysis to detect and block zero-day threats that haven\'t been seen before.',
      helpful: 156,
      views: 1456
    },
    {
      id: 13,
      category: 'security',
      question: 'Does Bitdefender protect against phishing?',
      answer: 'Yes, Bitdefender includes advanced anti-phishing protection that blocks fraudulent websites and emails designed to steal your personal information.',
      helpful: 189,
      views: 2345
    },
    {
      id: 14,
      category: 'security',
      question: 'What is the Advanced Threat Defense feature?',
      answer: 'Advanced Threat Defense is a proactive technology that monitors running apps in real-time and blocks any suspicious behavior, even from previously unknown threats.',
      helpful: 123,
      views: 789
    },
    
    // Billing Questions (5)
    {
      id: 15,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. Enterprise customers can request invoice-based billing.',
      helpful: 145,
      views: 2345
    },
    {
      id: 16,
      category: 'billing',
      question: 'Is there a money-back guarantee?',
      answer: 'Yes! All plans come with a 30-day money-back guarantee. If you\'re not satisfied within the first 30 days, contact our support team for a full refund, no questions asked.',
      helpful: 289,
      views: 5678
    },
    {
      id: 17,
      category: 'billing',
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we\'ll prorate any remaining balance.',
      helpful: 198,
      views: 2134
    },
    {
      id: 18,
      category: 'billing',
      question: 'Do you offer student discounts?',
      answer: 'Yes, we offer special pricing for students and educational institutions. Contact our sales team with your student ID to get 50% off on selected plans.',
      helpful: 234,
      views: 3456
    },
    {
      id: 19,
      category: 'billing',
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your Bitdefender Central account. Go to "My Subscriptions" and select "Cancel Auto-Renewal".',
      helpful: 167,
      views: 1890
    },
    
    // Technical Questions (5)
    {
      id: 20,
      category: 'technical',
      question: 'What are the system requirements?',
      answer: 'Minimum requirements: 1GB RAM, 1.5GB free disk space, and a stable internet connection. For optimal performance, we recommend 2GB RAM and 2GB free disk space.',
      helpful: 234,
      views: 3890
    },
    {
      id: 21,
      category: 'technical',
      question: 'How do I install Bitdefender on multiple devices?',
      answer: 'After purchase, log into your Bitdefender Central account at central.bitdefender.com. From there, you can download and install on all your devices. The number of devices depends on your plan.',
      helpful: 167,
      views: 2789
    },
    {
      id: 22,
      category: 'technical',
      question: 'Does Bitdefender slow down my computer?',
      answer: 'No, Bitdefender is designed for minimal system impact. Our advanced optimization ensures smooth performance while gaming, streaming, or working. Independent tests show less than 2% performance impact.',
      helpful: 345,
      views: 6789
    },
    {
      id: 23,
      category: 'technical',
      question: 'How do I run a scan?',
      answer: 'Open Bitdefender and click on "Scan" in the left menu. You can choose between Quick Scan, System Scan, or Custom Scan. You can also schedule automatic scans.',
      helpful: 123,
      views: 1456
    },
    {
      id: 24,
      category: 'technical',
      question: 'What should I do if Bitdefender detects a threat?',
      answer: 'Bitdefender automatically quarantines or removes threats. You can view the details in the "Protection" section. If you think it\'s a false positive, you can restore the file from quarantine.',
      helpful: 98,
      views: 890
    },
    
    // Account Questions (4)
    {
      id: 25,
      category: 'account',
      question: 'How do I create a Bitdefender account?',
      answer: 'Visit our website and click "Sign Up" or download any Bitdefender product. You can create an account using your email address. After purchase, you\'ll get access to Bitdefender Central for managing your subscriptions.',
      helpful: 123,
      views: 1456
    },
    {
      id: 26,
      category: 'account',
      question: 'I forgot my password. How can I reset it?',
      answer: 'Click "Forgot Password" on the login page. Enter your email address, and we\'ll send you a password reset link. For immediate assistance, use our live chat support.',
      helpful: 234,
      views: 3456
    },
    {
      id: 27,
      category: 'account',
      question: 'How do I change my email address?',
      answer: 'Log into Bitdefender Central, go to "Account Settings", and click on "Edit" next to your email address. You\'ll need to verify the new email address.',
      helpful: 89,
      views: 678
    },
    {
      id: 28,
      category: 'account',
      question: 'Can I share my subscription with family members?',
      answer: 'Yes, Family Pack and higher plans allow you to share protection with family members. You can invite them from your Bitdefender Central account.',
      helpful: 156,
      views: 2345
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleHelpfulClick = (id: number) => {
    toast.success('Thanks for your feedback!');
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-bitdefender-dark to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-bitdefender-red rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="block text-bitdefender-red">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about Bitdefender products and services
            </p>
            
            {/* Video Tutorial Link */}
            <motion.a
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <FaVideo />
              Watch Video Tutorials
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-4">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bitdefender-red focus:border-transparent text-lg"
              />
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <span>📚 {faqs.length} Articles</span>
              <span>⏱️ Avg. response: 2min</span>
              <span>👍 98% helpful</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-bitdefender-red text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            <AnimatePresence>
              {filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="font-semibold text-gray-800 text-lg">
                        {faq.question}
                      </span>
                      <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                        <span>👁️ {faq.views} views</span>
                        <span>👍 {faq.helpful} found helpful</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <FaChevronDown className="text-bitdefender-red" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3">
                            <a
                              href="https://getchatsupport.live/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm bg-bitdefender-red text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                            >
                              <FaHeadset />
                              Chat with Support
                            </a>
                            <button
                              onClick={() => handleHelpfulClick(faq.id)}
                              className="inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
                            >
                              👍 Helpful
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-xl shadow-md"
              >
                <p className="text-xl text-gray-600 mb-4">No questions found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="text-bitdefender-red font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-r from-bitdefender-red to-red-700 text-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Our support team is available 24/7 to help you with any questions or concerns.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <a
                  href="https://getchatsupport.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-bitdefender-red px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  💬 Live Chat Now
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 backdrop-blur-lg text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors text-center border border-white/20"
                >
                  📧 Email Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;