import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Globe, 
  Truck, 
  Factory,
  ArrowRight,
  MapPin,
  TrendingUp,
  Package,
  Ship,
  Building2,
  Zap
} from 'lucide-react';

const OurWork = () => {
  const sezHighlights = [
    {
      icon: Factory,
      title: "Industrial Hub",
      description: "Strategic location within PCPIR supporting petroleum and chemical industries"
    },
    {
      icon: Globe,
      title: "Export Gateway", 
      description: "Direct access to international markets through dedicated export facilities"
    },
    {
      icon: Truck,
      title: "Integrated Logistics",
      description: "Seamless connectivity between port, industry, and transportation networks"
    },
    {
      icon: Zap,
      title: "Processing Zone",
      description: "Value-added processing capabilities within the special economic zone"
    }
  ];

  const logisticsNetwork = [
    {
      route: "NH-16 Corridor",
      description: "Primary highway connecting to major eastern cities",
      connectivity: ["Kolkata", "Bhubaneswar", "Vizag", "Chennai"],
      distance: "Direct access"
    },
    {
      route: "NH-216 Network",
      description: "Interior connectivity to industrial hinterland", 
      connectivity: ["Hyderabad", "Warangal", "Rajahmundry"],
      distance: "150-300 km"
    },
    {
      route: "Railway Network",
      description: "Direct rail connectivity for bulk cargo movement",
      connectivity: ["East Coast Railway", "South Central Railway"],
      distance: "On-site connectivity"
    },
    {
      route: "Inland Waterways",
      description: "River connectivity through Godavari system",
      connectivity: ["Godavari River", "Inland Ports"],
      distance: "Direct access"
    }
  ];

  const exportCategories = [
    {
      category: "Agricultural Products",
      icon: Package,
      products: ["Rice", "Pulses", "Spices", "Oil Seeds", "Processed Foods"],
      volume: "4.2 MMT",
      destinations: ["Middle East", "Africa", "Southeast Asia"],
      growth: "+18%"
    },
    {
      category: "Granite & Minerals",
      icon: Building2,
      products: ["Black Galaxy Granite", "Iron Ore", "Limestone", "Bauxite"],
      volume: "6.8 MMT", 
      destinations: ["USA", "Europe", "China", "Japan"],
      growth: "+12%"
    },
    {
      category: "Industrial Goods",
      icon: Factory,
      products: ["Chemicals", "Petrochemicals", "Steel Products", "Machinery"],
      volume: "3.5 MMT",
      destinations: ["Global Markets", "Asia-Pacific"],
      growth: "+22%"
    },
    {
      category: "Containerized Cargo",
      icon: Ship,
      products: ["Mixed Cargo", "Project Equipment", "Auto Components"],
      volume: "125K TEU",
      destinations: ["Worldwide"],
      growth: "+15%"
    }
  ];

  const supplyChainSteps = [
    {
      step: 1,
      title: "Source Collection",
      description: "Efficient collection from mines, farms, and manufacturing units across the hinterland"
    },
    {
      step: 2,
      title: "Transportation",
      description: "Multi-modal transport via road, rail, and inland waterways to port facilities"
    },
    {
      step: 3,
      title: "Port Processing",
      description: "Quality checking, sorting, packaging, and storage at port warehouses"
    },
    {
      step: 4,
      title: "Vessel Loading",
      description: "Efficient loading operations using modern mechanized handling equipment"
    },
    {
      step: 5,
      title: "Global Export",
      description: "Direct shipment to international markets with full documentation support"
    }
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
            <Briefcase className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Strategic operations driving India's export economy through 
              comprehensive maritime logistics and industrial support
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEZ & PCPIR Operations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Factory className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEZ & PCPIR Operations</h2>
            <p className="text-xl text-gray-600">
              Strategic positioning within Special Economic Zone and Petroleum, 
              Chemical & Petrochemical Investment Region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sezHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>

          {/* SEZ Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">SEZ Impact Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-sky-300 mb-2">₹15,000 Cr</div>
                <p className="text-blue-200">Industrial Investment</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-300 mb-2">25,000+</div>
                <p className="text-blue-200">Direct Employment</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-300 mb-2">₹8,500 Cr</div>
                <p className="text-blue-200">Annual Export Value</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logistics Network */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Truck className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrated Logistics Network</h2>
            <p className="text-xl text-gray-600">
              Comprehensive connectivity through NH-16, NH-216, and multi-modal transportation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logisticsNetwork.map((network, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{network.route}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{network.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Connections:</h4>
                  <div className="flex flex-wrap gap-2">
                    {network.connectivity.map((connection, connIndex) => (
                      <span 
                        key={connIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {connection}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Accessibility:</span>
                    <span className="font-semibold text-green-600">{network.distance}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Exports */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Globe className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Export Operations</h2>
            <p className="text-xl text-gray-600">
              Diverse export portfolio serving international markets across continents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    <TrendingUp className="h-4 w-4" />
                    <span>{category.growth}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Major Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, productIndex) => (
                        <span 
                          key={productIndex}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Annual Volume:</h4>
                      <p className="text-2xl font-bold text-blue-600">{category.volume}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Key Markets:</h4>
                      <div className="space-y-1">
                        {category.destinations.map((dest, destIndex) => (
                          <p key={destIndex} className="text-sm text-gray-600">{dest}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Flow */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ArrowRight className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supply Chain Excellence</h2>
            <p className="text-xl text-gray-600">
              End-to-end logistics solution from source to global markets
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              {supplyChainSteps.map((step, index) => (
                <React.Fragment key={step.step}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                  </motion.div>
                  {index < supplyChainSteps.length - 1 && (
                    <ArrowRight className="h-8 w-8 text-blue-400 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-6">
              {supplyChainSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Impact */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h2 className="text-4xl font-bold mb-6">Strategic Economic Impact</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Our operations contribute significantly to India's export economy, 
              supporting regional development and international trade growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-300 mb-2">17.80 MMT</div>
                <p className="text-blue-200">Annual Cargo Throughput</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-300 mb-2">50+</div>
                <p className="text-blue-200">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-300 mb-2">₹12,000 Cr</div>
                <p className="text-blue-200">Export Value Generated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;