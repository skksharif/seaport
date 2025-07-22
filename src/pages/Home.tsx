import React from 'react';
import { motion } from 'framer-motion';
import HeroSlideshow from '../components/HeroSlideshow';
import { 
  TrendingUp, 
  MapPin, 
  Target, 
  Anchor,
  Ship,
  Package,
  BarChart3,
  Globe
} from 'lucide-react';

const Home = () => {
  const stats = [
    {
      value: "17.80",
      unit: "MMT",
      label: "Total Cargo Handled",
      icon: Package,
      color: "text-blue-600"
    },
    {
      value: "24/7",
      unit: "",
      label: "Operations Available",
      icon: Ship,
      color: "text-sky-600"
    },
    {
      value: "7+",
      unit: "Berths",
      label: "Main Jetty Capacity",
      icon: Anchor,
      color: "text-blue-800"
    },
    {
      value: "100+",
      unit: "Countries",
      label: "Global Reach",
      icon: Globe,
      color: "text-sky-700"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Port Performance at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading maritime operations with world-class infrastructure and exceptional service standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="flex items-baseline justify-center space-x-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                  {stat.unit && <span className="text-xl font-medium text-gray-600">{stat.unit}</span>}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Strategic Position */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategic Location
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Positioned strategically between Visakhapatnam and Chennai, Kakinada Seaports 
                serves as a crucial maritime gateway for Eastern India's trade and commerce.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Direct connectivity to NH-16 and NH-216</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Proximity to major industrial corridors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Easy access to hinterland markets</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">Kakinada, East Godavari</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white"
            >
              <Target className="h-12 w-12 text-sky-300 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To provide world-class port services and maritime solutions that drive economic growth, 
                while maintaining the highest standards of safety, environmental protection, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sky-600 to-sky-700 p-8 rounded-2xl text-white"
            >
              <TrendingUp className="h-12 w-12 text-blue-300 mb-6" />
              <h3 className="text-2xl font-bold mb-4">SEZ & PCPIR</h3>
              <p className="text-lg leading-relaxed">
                As part of the Petroleum, Chemical & Petrochemical Investment Region (PCPIR) and Special Economic Zone (SEZ), 
                we facilitate seamless trade operations and support India's industrial growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;