import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  History, 
  User,
  Mail,
  Phone,
  Award,
  Shield,
  Compass,
  Building,
  Globe,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const location = useLocation();
  
  const teamMembers = [
    {
      name: "K V Rao",
      position: "Chairman & Managing Director",
      experience: "25+ years in maritime industry",
      expertise: "Strategic Leadership, Port Development",
      icon: User
    },
    {
      name: "M Muralidhar",
      position: "Chief Operating Officer",
      experience: "20+ years in port operations",
      expertise: "Operations Management, Process Optimization",
      icon: User
    },
    {
      name: "D Satya Rajesh",
      position: "Chief Financial Officer", 
      experience: "18+ years in financial management",
      expertise: "Financial Strategy, Risk Management",
      icon: User
    },
    {
      name: "Capt. Jacob Satyaraju",
      position: "VP Operations",
      experience: "22+ years maritime experience",
      expertise: "Marine Operations, Safety Management",
      icon: User
    },
    {
      name: "M Murali Krishna",
      position: "VP Strategy",
      experience: "15+ years strategic planning",
      expertise: "Business Strategy, Market Development",
      icon: User
    },
    {
      name: "M V Subrahmanyam",
      position: "DGM Logistics",
      experience: "17+ years logistics management",
      expertise: "Supply Chain, Logistics Optimization",
      icon: User
    }
  ];

  const Profile = () => (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="flex items-center space-x-4 mb-6">
          <Building className="h-10 w-10 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Our Profile</h2>
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Kakinada Seaports Ltd is a premier maritime infrastructure company strategically located 
            between Visakhapatnam and Chennai ports, serving as a vital gateway for Eastern India's 
            trade and commerce activities.
          </p>
          <p>
            Our port is equipped with state-of-the-art facilities including multiple berths at the Main Jetty, 
            specialized OSV (Offshore Supply Vessel) operations, and NRW (North-South) extensions designed 
            to accommodate various types of vessels and cargo operations.
          </p>
          <p>
            As part of the Petroleum, Chemical & Petrochemical Investment Region (PCPIR) and Special 
            Economic Zone (SEZ), we play a crucial role in facilitating seamless international trade 
            while supporting India's economic growth and industrial development.
          </p>
        </div>
      </motion.div>
    </div>
  );

  const Vision = () => (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="flex items-center space-x-4 mb-6">
          <Target className="h-10 w-10 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Vision Statement</h3>
            <p className="text-lg leading-relaxed">
              To be India's most preferred and sustainable port, delivering world-class maritime services 
              while driving economic growth and maintaining unwavering commitment to customer satisfaction, 
              safety, and environmental protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Customer Focus</h4>
              <p className="text-gray-600">Exceeding customer expectations through innovative solutions</p>
            </div>
            <div className="text-center p-4">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Safety Excellence</h4>
              <p className="text-gray-600">Zero-compromise approach to safety and security</p>
            </div>
            <div className="text-center p-4">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Environmental Care</h4>
              <p className="text-gray-600">Sustainable operations protecting our marine ecosystem</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const Team = () => (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600">Experienced professionals driving maritime excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.position}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Experience:</span>
                  <p className="text-gray-700 font-medium">{member.experience}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Expertise:</span>
                  <p className="text-gray-700 font-medium">{member.expertise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const HistoryPage = () => (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="flex items-center space-x-4 mb-6">
          <History className="h-10 w-10 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
        </div>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundation & Early Years</h3>
            <p className="text-gray-700 leading-relaxed">
              Established with the vision of creating a world-class port facility on India's eastern coast, 
              Kakinada Seaports began its journey as a strategic maritime infrastructure project designed 
              to serve the growing industrial needs of the region.
            </p>
          </div>
          <div className="border-l-4 border-sky-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Through phases of careful planning and execution, we developed our comprehensive port 
              infrastructure including the Main Jetty with 7 berths, specialized OSV facilities, 
              and NRW extensions to meet diverse maritime requirements.
            </p>
          </div>
          <div className="border-l-4 border-cyan-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Era & Growth</h3>
            <p className="text-gray-700 leading-relaxed">
              Today, we stand as a testament to strategic port development, handling diverse cargo types 
              including containers, bulk cargo, petroleum products, and supporting offshore operations 
              while maintaining our commitment to environmental sustainability and safety excellence.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const subPages = [
    { path: 'profile', label: 'Our Profile', icon: Building },
    { path: 'vision', label: 'Vision', icon: Target },
    { path: 'team', label: 'Team', icon: Users },
    { path: 'history', label: 'History', icon: History },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover our journey, mission, and the dedicated team behind 
              Kakinada Seaports' maritime excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center space-x-1">
            {subPages.map((page) => (
              <Link
                key={page.path}
                to={`/about/${page.path}`}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  location.pathname.includes(page.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <page.icon className="h-4 w-4" />
                <span>{page.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="vision" element={<Vision />} />
            <Route path="team" element={<Team />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="*" element={<Profile />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default About;