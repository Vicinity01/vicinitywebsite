import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Mic, 
  Bot, 
  Workflow,
  CheckCircle,
  Users,
  BarChart,
  Brain
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ConsultationForm from '../components/ConsultationForm';

const ServicesPage = () => {
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-6">Our AI Services</h1>
            <p className="text-secondary-200 text-lg mb-8">
              Cutting-edge AI solutions designed to transform your business operations and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbots Section */}
      <section id="chatbots" className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
                <MessageSquare className="w-5 h-5 mr-2" />
                <span className="font-medium">AI Chatbots</span>
              </div>
              
              <h2 className="mb-6">Intelligent Conversational Agents</h2>
              <p className="text-secondary-600 mb-6">
                Our custom-built AI chatbots go far beyond simple rule-based systems. Using advanced natural language processing, they can understand context, learn from interactions, and provide helpful responses that feel natural and human-like.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Natural Language Understanding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Context-Aware Responses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Multi-Channel Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Real-Time Analytics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Business Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>24/7 Customer Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reduced Support Costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Increased Customer Satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Faster Response Times</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Scalable Support Operations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <a
                href="/#consultation"
                onClick={scrollToConsultation}
                className="btn btn-primary"
              >
                Get Started with AI Chatbots
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Chatbot Solutions" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voice Agents Section */}
      <section id="voice-agents" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8439068/pexels-photo-8439068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Voice Agent Solutions" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
                <Mic className="w-5 h-5 mr-2" />
                <span className="font-medium">Voice Agents</span>
              </div>
              
              <h2 className="mb-6">Human-Like Voice Interactions</h2>
              <p className="text-secondary-600 mb-6">
                Our voice agents use state-of-the-art speech recognition and natural language understanding to create seamless voice interactions for your customers and employees.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Advanced Speech Recognition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Natural Voice Synthesis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Multi-Language Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Voice Authentication</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Business Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Enhanced Accessibility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Improved Call Resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reduced Wait Times</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Consistent Service Quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Global Market Reach</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <a
                href="/#consultation"
                onClick={scrollToConsultation}
                className="btn btn-primary"
              >
                Explore Voice Agent Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal AI Assistants Section */}
      <section id="personal-assistants" className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
                <Bot className="w-5 h-5 mr-2" />
                <span className="font-medium">Personal AI Assistants</span>
              </div>
              
              <h2 className="mb-6">Productivity-Enhancing Digital Assistants</h2>
              <p className="text-secondary-600 mb-6">
                Our personal AI assistants help your team members save time and focus on high-value work by automating routine tasks and providing intelligent support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Task Automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Smart Scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Document Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Intelligent Reminders</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Business Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Increased Productivity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Better Time Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reduced Human Error</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Enhanced Organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Streamlined Workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <a
                href="/#consultation"
                onClick={scrollToConsultation}
                className="btn btn-primary"
              >
                Discover Personal AI Assistants
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/8438934/pexels-photo-8438934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Personal AI Assistant Solutions" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Automation Section */}
      <section id="workflow-automation" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8439085/pexels-photo-8439085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Workflow Automation Solutions" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
                <Workflow className="w-5 h-5 mr-2" />
                <span className="font-medium">Workflow Automation</span>
              </div>
              
              <h2 className="mb-6">Intelligent Process Automation</h2>
              <p className="text-secondary-600 mb-6">
                Our workflow automation solutions combine AI and robotic process automation to streamline operations, reduce errors, and accelerate business processes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Process Mapping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Data Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automated Decisions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Performance Analytics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Business Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Operational Efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cost Reduction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Improved Accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Faster Processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Better Compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <a
                href="/#consultation"
                onClick={scrollToConsultation}
                className="btn btn-primary"
              >
                Transform Your Workflows
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the ServicesPage content remains unchanged */}
      {/* ... */}
    </>
  );
};

export default ServicesPage;