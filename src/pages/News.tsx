import React from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Download, 
  TrendingUp, 
  Calendar,
  FileText,
  BarChart3,
  Package,
  Ship,
  Award
} from 'lucide-react';

const News = () => {
  const cargoStats = [
    {
      period: "2024-25",
      totalCargo: "17.80 MMT",
      containers: "125,000 TEU",
      bulkCargo: "12.5 MMT",
      liquidCargo: "3.8 MMT",
      growth: "+12.5%"
    },
    {
      period: "2023-24", 
      totalCargo: "15.82 MMT",
      containers: "110,000 TEU",
      bulkCargo: "11.2 MMT",
      liquidCargo: "3.4 MMT",
      growth: "+8.3%"
    },
    {
      period: "2022-23",
      totalCargo: "14.61 MMT",
      containers: "98,000 TEU",
      bulkCargo: "10.8 MMT",
      liquidCargo: "3.1 MMT",
      growth: "+15.2%"
    }
  ];

  const downloads = [
    {
      title: "Port Brochure 2024",
      type: "PDF",
      size: "2.5 MB",
      description: "Comprehensive port facilities and services overview"
    },
    {
      title: "Board Meeting Minutes - Q4 2024",
      type: "PDF",
      size: "1.2 MB",
      description: "Latest board meeting proceedings and decisions"
    },
    {
      title: "Tariff Schedule 2024-25",
      type: "PDF", 
      size: "850 KB",
      description: "Updated tariff rates for all port services"
    },
    {
      title: "Annual Report 2023-24",
      type: "PDF",
      size: "4.1 MB",
      description: "Complete annual performance report"
    },
    {
      title: "Environmental Impact Assessment",
      type: "PDF",
      size: "3.2 MB", 
      description: "Environmental compliance and sustainability report"
    },
    {
      title: "Safety Management System",
      type: "PDF",
      size: "1.8 MB",
      description: "Port safety protocols and management framework"
    }
  ];

  const announcements = [
    {
      date: "March 15, 2024",
      title: "LNG Import Terminal Development Approved",
      content: "Board approves Phase-1 development of LNG import terminal with capacity of 5 MMTPA, expected to commence operations by Q2 2025.",
      priority: "high"
    },
    {
      date: "February 28, 2024",
      title: "Record Cargo Handling Achievement", 
      content: "Kakinada Seaports achieves record monthly cargo handling of 1.8 MMT in February 2024, marking 15% growth over previous year.",
      priority: "medium"
    },
    {
      date: "February 10, 2024",
      title: "New Container Handling Equipment",
      content: "Installation of 3 new reach stackers and 2 container cranes completed, enhancing container terminal efficiency by 25%.",
      priority: "medium"
    },
    {
      date: "January 20, 2024",
      title: "ISO 45001 Certification Renewed",
      content: "Successfully renewed ISO 45001:2018 certification for Occupational Health & Safety Management System for another 3 years.",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';  
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            <Newspaper className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Stay informed with the latest developments, achievements, 
              and important announcements from Kakinada Seaports
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cargo Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cargo Handling Statistics</h2>
            <p className="text-xl text-gray-600">Year-over-year performance metrics and growth indicators</p>
          </motion.div>

          <div className="space-y-6">
            {cargoStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{stat.period}</h3>
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                        stat.growth.includes('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        <TrendingUp className="h-4 w-4" />
                        <span>{stat.growth}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <Package className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-gray-900">{stat.totalCargo}</p>
                      <p className="text-sm text-gray-600">Total Cargo</p>
                    </div>
                    <div className="text-center">
                      <Ship className="h-6 w-6 text-sky-600 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-gray-900">{stat.containers}</p>
                      <p className="text-sm text-gray-600">Containers</p>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="h-6 w-6 text-blue-700 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-gray-900">{stat.bulkCargo}</p>
                      <p className="text-sm text-gray-600">Bulk Cargo</p>
                    </div>
                    <div className="text-center">
                      <Package className="h-6 w-6 text-cyan-600 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-gray-900">{stat.liquidCargo}</p>
                      <p className="text-sm text-gray-600">Liquid Cargo</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & Highlights */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
            <p className="text-xl text-gray-600">Important updates and achievements from our operations</p>
          </motion.div>

          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 border-l-4 shadow-lg ${getPriorityColor(announcement.priority)}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${getPriorityBadge(announcement.priority)}`}>
                        {announcement.priority} Priority
                      </span>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{announcement.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Download className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Downloads & Resources</h2>
            <p className="text-xl text-gray-600">Access important documents, reports, and information resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {download.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{download.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">{download.type}</span>
                        <span>{download.size}</span>
                      </div>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;