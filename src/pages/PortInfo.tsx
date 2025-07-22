import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Anchor, 
  Ship, 
  ArrowRight, 
  Info, 
  Waves,
  Navigation,
  MapPin,
  Ruler,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PortInfo = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const channelInfo = {
    depth: "14.0 meters",
    width: "200 meters",
    length: "12 km",
    maintenance: "Regular dredging maintained"
  };

  const berthDetails = [
    {
      id: "main-jetty",
      title: "Main Jetty",
      berths: 7,
      additionalBerth: "OSV Berth",
      specs: {
        length: "1,680 meters",
        depth: "12-14 meters",
        capacity: "Multiple vessel types"
      },
      description: "Primary cargo handling facility with modern infrastructure for bulk and containerized cargo operations.",
      vessels: ["Bulk Carriers", "Container Ships", "General Cargo", "OSV Support"]
    },
    {
      id: "osv-jetty",
      title: "OSV Jetty",
      berths: 3,
      additionalBerth: "Dedicated OSV Operations",
      specs: {
        length: "400 meters", 
        depth: "8-10 meters",
        capacity: "Offshore vessels"
      },
      description: "Specialized facility for Offshore Supply Vessel operations supporting oil & gas industry.",
      vessels: ["Supply Vessels", "Platform Support", "Crew Boats", "Service Vessels"]
    },
    {
      id: "nrw-north",
      title: "NRW North Extension",
      berths: 2,
      additionalBerth: "Future Expansion Ready",
      specs: {
        length: "300 meters",
        depth: "10-12 meters", 
        capacity: "Multi-purpose"
      },
      description: "Northern extension facility designed for specialized cargo and future expansion capabilities.",
      vessels: ["Break Bulk", "Project Cargo", "Heavy Lift", "Specialized Vessels"]
    },
    {
      id: "nrw-south",
      title: "NRW South Extension",
      berths: 2,
      additionalBerth: "Development Phase",
      specs: {
        length: "300 meters",
        depth: "10-12 meters",
        capacity: "Multi-purpose"
      },
      description: "Southern extension with advanced mooring systems and cargo handling equipment.",
      vessels: ["Bulk Cargo", "Liquid Cargo", "Container Feeder", "Coastal Vessels"]
    }
  ];

  const vesselDimensions = {
    maxLOA: "250 meters",
    maxBeam: "45 meters",
    maxDraft: "13.5 meters",
    maxDWT: "100,000 tons"
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

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
            <Anchor className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Port Information</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive details about our world-class maritime infrastructure, 
              berth specifications, and vessel accommodation capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigational Channel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Navigation className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Navigational Channel</h2>
            <p className="text-xl text-gray-600">Safe and efficient vessel access to our port facilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(channelInfo).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-2xl font-bold text-blue-600">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Berth Details */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Ship className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Berth Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art berth infrastructure for diverse vessel operations</p>
          </motion.div>

          <div className="space-y-6">
            {berthDetails.map((berth, index) => (
              <motion.div
                key={berth.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(berth.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Anchor className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{berth.title}</h3>
                      <p className="text-blue-600 font-medium">
                        {berth.berths} Berths + {berth.additionalBerth}
                      </p>
                    </div>
                  </div>
                  {expandedSection === berth.id ? (
                    <ChevronUp className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </div>

                {expandedSection === berth.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h4>
                        <div className="space-y-2">
                          {Object.entries(berth.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize">{key}:</span>
                              <span className="font-medium text-gray-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Vessel Types</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {berth.vessels.map((vessel) => (
                            <div key={vessel} className="bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700">
                              {vessel}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg">{berth.description}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel Dimensions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Ruler className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Permissible Vessel Dimensions</h2>
            <p className="text-xl text-gray-600">Maximum vessel specifications for safe port operations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(vesselDimensions).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-center text-white"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {key.replace(/max/g, '').replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-3xl font-bold text-sky-300">{value}</p>
              </motion.div>
            ))}
          </div>

          {/* Port Layout Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/port-layout"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MapPin className="h-5 w-5" />
              <span>View Detailed Port Layout</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 24/7 Operations */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Clock className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h2 className="text-4xl font-bold mb-4">24/7 Port Operations</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Our port operates around the clock with night navigation capabilities, 
              ensuring minimal berth wait times and maximum operational efficiency for all vessels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-300 mb-2">24/7</div>
                <p className="text-blue-200">Continuous Operations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-300 mb-2">365</div>
                <p className="text-blue-200">Days Available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-300 mb-2">{"< 4hrs"}</div>
                <p className="text-blue-200">Average Wait Time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortInfo;