import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Mic, 
  Bot, 
  Workflow, 
  ArrowRight, 
  ShieldCheck,
  TrendingUp,
  Clock
} from 'lucide-react';

import ServiceCard from '../components/ServiceCard';
import ConsultationForm from '../components/ConsultationForm';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const scrollToConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    const consultationForm = document.getElementById('consultation');
    if (consultationForm) {
      consultationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6">
                <span className="text-primary-500">Global Intelligence.</span> Local Solutions.
              </h1>
              <p className="text-lg text-secondary-600 mb-8">
                Vicinity Global Consulting helps businesses leverage cutting-edge AI technology to streamline operations, reduce costs, and create new revenue opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#consultation"
                  onClick={scrollToConsultation}
                  className="btn btn-primary"
                >
                  Get Free Consultation
                </a>
                <Link to="/services" className="btn btn-secondary">
                  Explore Our Services
                </Link>
              </div>
              <div className="mt-8 py-4 px-6 bg-white/80 rounded-lg shadow-sm backdrop-blur">
                <p className="text-primary-900 font-medium flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  Proud to offer special discounts for veterans
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:pl-12 flex justify-center"
            >
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Technology Consulting" 
                className="rounded-xl shadow-lg max-w-full object-cover max-h-[500px]" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Vicinity Global Consulting?"
            subtitle="We combine deep technical expertise with strategic business acumen to deliver AI solutions that drive real results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Veteran-Owned</h3>
              <p className="text-secondary-600">
                Founded by a U.S. Naval Academy graduate with extensive military and business experience, we bring discipline and strategic thinking to every project.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
              <p className="text-secondary-600">
                We focus on delivering measurable business outcomes through AI adoption, not just implementing technology for its own sake.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Future-Ready</h3>
              <p className="text-secondary-600">
                We stay at the cutting edge of AI advancements to ensure your business is prepared for the rapidly evolving technological landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <SectionHeading
            title="Our AI Services"
            subtitle="We offer a comprehensive range of AI-powered solutions designed to transform your business operations."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              id="chatbots"
              icon={<MessageSquare className="w-6 h-6" />}
              title="AI Chatbots"
              description="Custom-built conversational AI solutions that enhance customer service, streamline support, and boost engagement."
              delay={0}
            />
            
            <ServiceCard
              id="voice-agents"
              icon={<Mic className="w-6 h-6" />}
              title="Voice Agents"
              description="Advanced voice-powered AI systems that provide natural, human-like interactions for customer service and information retrieval."
              delay={1}
            />
            
            <ServiceCard
              id="personal-assistants"
              icon={<Bot className="w-6 h-6" />}
              title="Personal AI Assistants"
              description="Intelligent digital assistants that boost productivity by automating routine tasks and providing timely information access."
              delay={2}
            />
            
            <ServiceCard
              id="workflow-automation"
              icon={<Workflow className="w-6 h-6" />}
              title="Workflow Automation"
              description="End-to-end process automation solutions that eliminate manual tasks, reduce errors, and accelerate business operations."
              delay={3}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-primary inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with Vicinity Global Consulting."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Implementing their AI chatbot solution resulted in a 35% reduction in customer service costs while improving satisfaction scores."
              author="Sarah Johnson"
              role="COO"
              company="TechCraft Solutions"
              rating={5}
              delay={0}
            />
            
            <TestimonialCard
              quote="Will and his team helped us modernize our operations with workflow automation. The ROI was visible within the first quarter."
              author="Michael Chen"
              role="VP of Operations"
              company="Global Logistics Inc."
              rating={5}
              delay={1}
            />
            
            <TestimonialCard
              quote="Their personal AI assistant solution transformed how our executives manage their day, saving each of them around 10 hours per week."
              author="Jessica Williams"
              role="CTO"
              company="Innovate Financial"
              rating={4}
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-secondary-200 text-lg mb-8">
                Schedule your free consultation today and discover how our AI solutions can help your business reduce costs, improve efficiency, and create new revenue opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-secondary-200">Personalized AI strategy tailored to your business</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-secondary-200">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-secondary-200">Special discounts for veteran-owned businesses</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;