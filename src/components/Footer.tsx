import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-primary-400 mr-2" />
              <span className="text-xl font-montserrat font-bold">
                <span className="text-primary-400">Vicinity</span>{' '}
                <span className="text-white">Global</span>
              </span>
            </div>
            <p className="text-secondary-300 mb-6">
              Leveraging cutting-edge AI technology to deliver exceptional value to businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Our Founder
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#consultation" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services#chatbots" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services#voice-agents" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Voice Agents
                </Link>
              </li>
              <li>
                <Link to="/services#personal-assistants" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Personal AI Assistants
                </Link>
              </li>
              <li>
                <Link to="/services#workflow-automation" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-secondary-300">
                  Atlanta, Georgia
                </span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-400 mr-3 mt-0.5" />
                <a href="mailto:info@vicinityglobal.com" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  info@vicinityglobal.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-400 mr-3 mt-0.5" />
                <a href="tel:+14045551234" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  (404) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              &copy; {currentYear} Vicinity Global Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;