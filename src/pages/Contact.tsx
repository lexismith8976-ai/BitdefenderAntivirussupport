import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact: React.FC = () => {
  const liveChatLink = "https://getchatsupport.live/";
  
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['123 Security Avenue', 'Cyber City, CC 12345', 'United States']
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+1 (800) 123-4567', '+1 (888) 765-4321', '24/7 Support Available']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['support@bitdefender.com', 'sales@bitdefender.com', 'info@bitdefender.com']
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed']
    }
  ];

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
            Get in Touch
            <span className="block text-bitdefender-red">We're Here to Help</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Have questions? Our support team is ready to assist you 24/7.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl text-bitdefender-red mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Find Us Here
                </h3>
                <div className="aspect-video bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-bitdefender-red mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800">Headquarters</h4>
                  <p className="text-gray-600">
                    Bitdefender Headquarters<br />
                    123 Security Avenue<br />
                    Cyber City, CC 12345<br />
                    United States
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold text-gray-800 mb-2">Quick Links</h4>
                    <div className="flex gap-4 flex-wrap">
                      <a 
                        href={liveChatLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-bitdefender-red hover:underline"
                      >
                        Support Center
                      </a>
                      <Link to="/faq" className="text-bitdefender-red hover:underline">
                        FAQs
                      </Link>
                      <a 
                        href={liveChatLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-bitdefender-red hover:underline"
                      >
                        Community
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-gradient-to-r from-bitdefender-red to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking for Quick Answers?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Check our comprehensive FAQ section for instant answers to common questions.
            </p>
            <Link to="/faq">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-bitdefender-red px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Visit FAQ
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;