import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  rating,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-secondary-300'
            }`}
          />
        ))}
      </div>
      <p className="text-secondary-700 italic mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold text-secondary-900">{author}</p>
        <p className="text-sm text-secondary-600">
          {role}, {company}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;