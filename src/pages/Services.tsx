import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Navigation, 
  Timer, 
  Zap,
  Warehouse,
  FileText,
  Settings,
  Droplet,
  Anchor,
  Wrench,
  Package,
  Truck,
  Star,
  Shield,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock port services ensuring continuous cargo operations and vessel movements with no downtime.",
      features: ["Continuous cargo handling", "Night shift operations", "Emergency services available"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Navigation,
      title: "Night Navigation",
      description: "Advanced night navigation facilities with state-of-the-art lighting and radar systems for safe vessel movements.",
      features: ["Advanced radar systems", "LED navigation aids", "24/7 pilot services"],
      color: "from-sky-600 to-sky-700"
    },
    {
      icon: Timer,
      title: "Minimal Berth Wait Time",
      description: "Efficient berth allocation and management system ensuring minimal waiting periods for incoming vessels.",
      features: ["Smart berth allocation", "Real-time scheduling", "Priority handling"],
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: Zap,
      title: "Quick Turnaround Time",
      description: "Optimized cargo handling processes and experienced workforce deliver industry-leading turnaround times.",
      features: ["Automated systems", "Skilled workforce", "Process optimization"],
      color: "from-cyan-600 to-cyan-700"
    },
    {
      icon: Warehouse,
      title: "Advanced Warehousing",
      description: "Modern storage facilities with climate control, security systems, and inventory management solutions.",
      features: ["Climate controlled storage", "RFID tracking", "Security surveillance"],
      color: "from-blue-600 to-sky-600"
    },
    {
      icon: FileText,
      title: "EDI Customs",
      description: "Electronic Data Interchange systems for seamless customs clearance and documentation processes.",
      features: ["Paperless processing", "Real-time updates", "Compliance management"],
      color: "from-indigo-600 to-indigo-700"
    },
    {
      icon: Settings,
      title: "Mechanized Systems",
      description: "State-of-the-art cargo handling equipment and automated systems for efficient port operations.",
      features: ["Automated cranes", "Conveyor systems", "Remote monitoring"],
      color: "from-blue-700 to-cyan-700"
    },
    {
      icon: Droplet,
      title: "Hazardous Liquid Handling",
      description: "Specialized facilities and trained personnel for safe handling of hazardous liquid cargo.",
      features: ["Certified equipment", "Safety protocols", "Environmental compliance"],
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Anchor,
      title: "Offshore Oil & Gas",
      description: "Dedicated support services for offshore oil and gas operations including supply vessel management.",
      features: ["OSV support", "Equipment handling", "Crew logistics"],
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: Wrench,
      title: "Ship Repair Services",
      description: "Comprehensive ship maintenance and repair services with experienced marine engineers.",
      features: ["Hull repairs", "Engine maintenance", "Emergency repairs"],
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Package,
      title: "Container Terminal",
      description: "Modern container handling facility with advanced equipment for efficient container operations.",
      features: ["Container yard", "Reach stackers", "CFS services"],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Truck,
      title: "LNG Import Terminal",
      description: "Upcoming LNG import facility for clean energy solutions and industrial requirements.",
      features: ["Coming soon", "Clean energy", "Industrial supply"],
      color: "from-green-600 to-green-700",
      comingSoon: true
    }
  ];

  const operationalStats = [
    { value: "99.8%", label: "Operational Uptime", icon: Award },
    { value: "<4hrs", label: "Average Wait Time", icon: Timer },
    { value: "24/7", label: "Service Availability", icon: Clock },
    { value: "ISO", label: "Certified Operations", icon: Shield }
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
            <Settings className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Port Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive maritime services designed to meet all your shipping, 
              cargo handling, and logistics requirements with world-class efficiency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Operational Excellence Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Operational Excellence</h2>
            <p className="text-xl text-gray-600">Proven performance metrics that define our service standards</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive maritime solutions for all your port requirements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6 relative">
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Star className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h2 className="text-4xl font-bold mb-6">Service Guarantee</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              We are committed to delivering exceptional service standards backed by our 
              ISO certifications and continuous improvement processes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-sky-300" />
                <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                <p className="text-blue-200">Zero-compromise safety protocols in all operations</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-sky-300" />
                <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
                <p className="text-blue-200">ISO certified processes and quality management</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-sky-300" />
                <h3 className="text-lg font-semibold mb-2">Time Guaranteed</h3>
                <p className="text-blue-200">On-time delivery with performance guarantees</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;