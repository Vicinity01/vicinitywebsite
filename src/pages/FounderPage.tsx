import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const FounderPage = () => {
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
            <h1 className="text-white mb-6">Meet Our Founder</h1>
            <p className="text-secondary-200 text-lg mb-8">
              Will Smith combines military discipline, business acumen, and technological expertise
              to lead Vicinity Global Consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="mb-6">Will Smith</h2>
              <p className="text-secondary-600 mb-4">
                A native of Decatur, GA, Will Smith is a dynamic business leader with more than 20
                years of professional experience across multiple industries and disciplines.
              </p>
              <p className="text-secondary-600 mb-4">
                Will graduated from the U.S. Naval Academy in 1997 with a Bachelor of Science in
                Economics and a Japanese minor. Will also holds a Master of Engineering
                Management from Old Dominion University and a Master of Business Administration
                (Finance) from Goizueta Business School (Emory University).
              </p>
              <p className="text-secondary-600 mb-4">
                After completing the Navy's Nuclear Power program, Will's operational assignments
                included tours onboard two U.S. Submarines where he completed several deployments
                and strategic deterrent patrols in support of key military operations around the world.
              </p>
              <p className="text-secondary-600 mb-4">
                Upon completion of his military service, Will worked as a sales representative with
                Johnson & Johnson marketing innovative medical devices for use in minimally invasive
                surgical procedures. He managed a $5.7M portfolio of accounts- increasing overall sales
                by more than 10% per year.
              </p>
              <p className="text-secondary-600 mb-4">
                Will then worked as a senior consulting manager for several global consulting firms. His
                specialties included applied strategic planning, project management, process design &
                re-engineering, managerial decision-making, and systems integration.
              </p>
              <p className="text-secondary-600 mb-8">
                Currently, Will is a part-owner in two small businesses in Atlanta, GA and is building
                out his own Consulting Practice focused on AI Services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <img 
                src="YOUR_NEW_IMAGE_URL_HERE" 
                alt="Will Smith - Founder" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <SectionHeading
            title="Education & Experience"
            subtitle="A track record of excellence across military service, corporate leadership, and entrepreneurship."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-lg">Master of Business Administration (Finance)</h4>
                  <p className="text-primary-600">Goizueta Business School, Emory University</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-lg">Master of Engineering Management</h4>
                  <p className="text-primary-600">Old Dominion University</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-lg">Bachelor of Science in Economics, Japanese Minor</h4>
                  <p className="text-primary-600">U.S. Naval Academy, 1997</p>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-lg">Nuclear Power Program</h4>
                  <p className="text-primary-600">United States Navy</p>
                </div>
              </div>
            </motion.div>
            
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Professional Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent-500 pl-4">
                  <h4 className="font-semibold text-lg">Founder & CEO</h4>
                  <p className="text-accent-600">Vicinity Global Consulting</p>
                  <p className="text-secondary-600 text-sm">2023 - Present</p>
                </div>
                
                <div className="border-l-4 border-accent-500 pl-4">
                  <h4 className="font-semibold text-lg">Senior Consulting Manager</h4>
                  <p className="text-accent-600">Multiple Global Consulting Firms</p>
                  <p className="text-secondary-600 text-sm">2010 - 2023</p>
                </div>
                
                <div className="border-l-4 border-accent-500 pl-4">
                  <h4 className="font-semibold text-lg">Sales Representative</h4>
                  <p className="text-accent-600">Johnson & Johnson</p>
                  <p className="text-secondary-600 text-sm">2005 - 2010</p>
                </div>
                
                <div className="border-l-4 border-accent-500 pl-4">
                  <h4 className="font-semibold text-lg">Submarine Officer</h4>
                  <p className="text-accent-600">United States Navy</p>
                  <p className="text-secondary-600 text-sm">1997 - 2005</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Specializations */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Areas of Expertise"
            subtitle="Will brings a diverse skill set to Vicinity Global Consulting."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
              <p className="text-secondary-600">
                Developing comprehensive business strategies that align technology implementations with organizational goals.
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Process Design</h3>
              <p className="text-secondary-600">
                Creating efficient, scalable business processes that leverage technology for maximum impact.
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Systems Integration</h3>
              <p className="text-secondary-600">
                Seamlessly connecting disparate technologies and platforms to create unified business solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Decision Science</h3>
              <p className="text-secondary-600">
                Applying data-driven methodologies to improve organizational decision-making.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Leadership Development</h3>
              <p className="text-secondary-600">
                Coaching executives and teams to effectively lead digital transformation initiatives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-secondary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Strategy</h3>
              <p className="text-secondary-600">
                Developing practical applications of artificial intelligence to solve real business problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">Work With Will Smith and Our Expert Team</h2>
            <p className="text-primary-100 text-lg mb-8">
              Schedule your free consultation today to discuss how our expertise can help your business leverage AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#consultation" className="btn bg-white text-primary-600 hover:bg-primary-50">
                Request Consultation
              </Link>
              <Link to="/services" className="btn bg-primary-700 text-white hover:bg-primary-800 inline-flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FounderPage;