import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { ContactFormData } from '../types';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <FaUser className="text-bitdefender-red" />
            Full Name
          </label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-bitdefender-red transition-all`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <FaEnvelope className="text-bitdefender-red" />
            Email Address
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-bitdefender-red transition-all`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <FaComment className="text-bitdefender-red" />
            Subject
          </label>
          <input
            type="text"
            {...register('subject', { required: 'Subject is required' })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-bitdefender-red transition-all`}
            placeholder="How can we help?"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <FaPaperPlane className="text-bitdefender-red" />
            Message
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-bitdefender-red transition-all resize-none`}
            placeholder="Tell us more about your inquiry..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-bitdefender-red text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
          } transition-colors`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <FaPaperPlane />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;