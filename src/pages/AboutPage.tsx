import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Heart, 
  ArrowRight 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-6">About Vicinity Global Consulting</h1>
            <p className="text-secondary-200 text-lg mb-8">
              We're on a mission to make advanced AI technology accessible and valuable for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Vicinity Global Consulting Team" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-6">Our Story</h2>
              <p className="text-secondary-600 mb-4">
                Vicinity Global Consulting was founded in Atlanta, Georgia by Will Smith, a Naval Academy graduate with extensive experience in both military and business operations.
              </p>
              <p className="text-secondary-600 mb-4">
                After years of working with global consulting firms and witnessing the transformative potential of artificial intelligence, Will identified a critical gap in the market: many businesses wanted to leverage AI but lacked the expertise to implement it effectively.
              </p>
              <p className="text-secondary-600 mb-8">
                Drawing on his strategic planning background and technical expertise, Will established Vicinity Global Consulting to help businesses harness the power of AI in practical, results-driven ways.
              </p>
              <Link to="/founder" className="btn btn-primary inline-flex items-center">
                Meet Our Founder
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="What drives us every day and shapes how we work with our clients."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-secondary-600">
                To empower organizations with accessible, strategic AI solutions that drive tangible business outcomes, create competitive advantages, and prepare our clients for the future of work.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-secondary-600">
                To be the premier AI consulting firm for organizations seeking practical, ethical, and impactful technology solutions that enhance human potential rather than replace it.
              </p>
            </motion.div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Our Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mx-auto mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Integrity</h4>
                <p className="text-secondary-600">
                  We uphold the highest ethical standards in all our interactions and recommendations.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                <p className="text-secondary-600">
                  We strive for exceptional quality in every solution we provide and relationship we build.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                <p className="text-secondary-600">
                  We embrace creativity and forward-thinking approaches to solve complex business challenges.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Service</h4>
                <p className="text-secondary-600">
                  We are dedicated to empowering our clients and their communities through our work.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Leadership"
            subtitle="Meet the experienced professionals guiding our company."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Will Smith" 
                  className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl font-semibold">Will Smith</h3>
              <p className="text-primary-600 mb-2">Founder & CEO</p>
              <p className="text-secondary-600 mb-4">
                Naval Academy graduate with 20+ years of experience across military service, medical device sales, and global consulting.
              </p>
              <Link 
                to="/founder" 
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                Read full bio
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Amanda Chen" 
                  className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl font-semibold">Amanda Chen</h3>
              <p className="text-primary-600 mb-2">Chief Technology Officer</p>
              <p className="text-secondary-600">
                Former AI research scientist with expertise in machine learning, NLP, and computer vision applications for business.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Marcus Johnson" 
                  className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl font-semibold">Marcus Johnson</h3>
              <p className="text-primary-600 mb-2">Head of Client Solutions</p>
              <p className="text-secondary-600">
                Strategic business consultant with a track record of implementing successful digital transformation initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-secondary-200 text-lg mb-8">
              Schedule your free consultation today and discover how our AI expertise can transform your business.
            </p>
            <Link to="/#consultation" className="btn bg-white text-primary-900 hover:bg-secondary-200">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;