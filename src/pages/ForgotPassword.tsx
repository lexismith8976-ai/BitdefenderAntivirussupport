import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaShieldAlt, FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const ForgotPassword: React.FC = () => {
  const { forgotPassword, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return;
    }
    
    setError('');
    await forgotPassword(email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-bitdefender-red text-white p-4 rounded-full">
                <FaShieldAlt size={40} />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
            <p className="text-gray-600 mt-2">
              Enter your email to receive a password reset link
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                    <FaEnvelope className="text-bitdefender-red" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      error ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-bitdefender-red transition-all`}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-bitdefender-red text-white py-3 rounded-lg font-semibold text-lg ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
                  } transition-colors`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    'Send Reset Link'
                  )}
                </motion.button>

                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-bitdefender-red transition-colors"
                >
                  <FaArrowLeft size={14} />
                  Back to Login
                </Link>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-green-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Check Your Email</h3>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <Link
                  to="/login"
                  className="inline-block bg-bitdefender-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Return to Login
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;