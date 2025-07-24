import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
    isVeteran: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: '',
        isVeteran: false,
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8" id="consultation">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-accent-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
          <p className="text-secondary-600 mb-6">
            Your consultation request has been received. We'll contact you within 24 hours to schedule your free consultation.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn btn-secondary"
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : (
        <>
          <h3 className="text-2xl font-semibold mb-2">Request Free Consultation</h3>
          <p className="text-secondary-600 mb-6">
            Get expert advice on how AI can transform your business. Special discounts available for veterans.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                    errors.fullName
                      ? 'border-error-500 focus:ring-error-200'
                      : 'border-secondary-300 focus:ring-primary-200 focus:border-primary-500'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-error-600">{errors.fullName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-error-500 focus:ring-error-200'
                      : 'border-secondary-300 focus:ring-primary-200 focus:border-primary-500'
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Your Company Inc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-200 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Tell us about your business needs and challenges..."
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="isVeteran"
                    name="isVeteran"
                    type="checkbox"
                    checked={formData.isVeteran}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="isVeteran" className="font-medium text-secondary-700">
                    I am a veteran
                  </label>
                  <p className="text-secondary-500">
                    Veterans receive special discounts on our services
                  </p>
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn btn-primary ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ConsultationForm;