import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaGlobe, FaHeart } from 'react-icons/fa';

const About: React.FC = () => {
  const stats = [
    { icon: <FaUsers />, value: '500M+', label: 'Happy Users' },
    { icon: <FaTrophy />, value: '150+', label: 'Awards Won' },
    { icon: <FaGlobe />, value: '180+', label: 'Countries' },
    { icon: <FaHeart />, value: '20+', label: 'Years of Trust' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '👨‍💼',
      bio: 'Cybersecurity expert with 20+ years of experience'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '👩‍💻',
      bio: 'Leading innovation in threat detection technology'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Research',
      image: '👨‍🔬',
      bio: 'PhD in Computer Science, specializing in AI security'
    },
    {
      name: 'Emily Brown',
      role: 'Customer Success',
      image: '👩‍💼',
      bio: 'Ensuring the best experience for our users'
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
            Our Mission: Making the Digital World
            <span className="block text-bitdefender-red">Safer for Everyone</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Since 2001, we've been at the forefront of cybersecurity innovation, protecting millions of users worldwide.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl text-bitdefender-red mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2001 by a team of cybersecurity experts, Bitdefender began with a simple mission: 
                to create innovative security solutions that protect people and businesses from evolving cyber threats.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the past two decades, we've grown from a small startup to a global leader in cybersecurity, 
                with over 500 million protected users and 150 industry awards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our team of 1,500+ security experts continues to push the boundaries of what's possible 
                in threat detection and prevention, using cutting-edge AI and machine learning technologies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="bg-gradient-to-br from-bitdefender-red to-red-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <div>
                      <strong>Innovation First</strong>
                      <p className="text-sm opacity-90">Constantly pushing the boundaries of cybersecurity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <div>
                      <strong>User-Centric Design</strong>
                      <p className="text-sm opacity-90">Creating solutions that are powerful yet easy to use</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <div>
                      <strong>Global Trust</strong>
                      <p className="text-sm opacity-90">Building security solutions that people can rely on</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated experts working tirelessly to keep you safe online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-bitdefender-red font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;