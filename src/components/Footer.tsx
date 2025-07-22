import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Anchor, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Clock,
  Shield
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/port-info', label: 'Port Information' },
    { path: '/services', label: 'Services' },
  ];

  const services = [
    'Container Terminal',
    'Bulk Cargo Handling',
    'Ship Repair',
    'Warehousing',
    'EDI Customs',
    'Night Navigation'
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-8 w-8 text-sky-300" />
              <h3 className="text-xl font-bold">Kakinada Seaports</h3>
            </div>
            <p className="text-blue-200 mb-4">
              India's premier seaport facility, strategically located between Vizag & Chennai, 
              providing world-class maritime services and logistics solutions.
            </p>
            <div className="flex space-x-3">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-blue-200 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/gallery" 
                  className="text-blue-200 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Gallery</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-blue-200 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Contact Us</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-blue-200 flex items-center">
                  <div className="w-1 h-1 bg-sky-300 rounded-full mr-2"></div>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Port Address:</p>
                  <p className="text-white">Kakinada, East Godavari District</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Phone:</p>
                  <p className="text-white">+91 884 238 5000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Email:</p>
                  <p className="text-white">info@kakinadaseaports.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-sky-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Operations:</p>
                  <p className="text-white">24/7 Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-blue-200 text-sm">
              © {currentYear} Kakinada Seaports Ltd. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center space-x-1 text-blue-200">
              <Shield className="h-4 w-4" />
              <span>Secure Site</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;