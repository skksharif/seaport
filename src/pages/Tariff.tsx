import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  ChevronDown, 
  ChevronUp,
  DollarSign,
  Package,
  Ship,
  Anchor,
  Clock,
  Scale
} from 'lucide-react';

const Tariff = () => {
  const [expandedSchedule, setExpandedSchedule] = useState<string | null>(null);

  const schedules = [
    {
      id: 'schedule-i',
      title: 'Schedule I - Vessel Services',
      description: 'Pilotage, towage, berth hire charges and related vessel services',
      icon: Ship,
      items: [
        'Port Dues and Pilotage Charges',
        'Berth Hire Charges', 
        'Towage Services',
        'Anchorage Charges',
        'Navigation Light Dues'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 15, 2024'
    },
    {
      id: 'schedule-ii',
      title: 'Schedule II - Cargo Handling',
      description: 'Loading, unloading, and handling charges for various cargo types',
      icon: Package,
      items: [
        'Bulk Cargo Handling',
        'Container Handling Charges',
        'Liquid Cargo Operations',
        'Break Bulk Cargo',
        'Project Cargo Handling'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 20, 2024'
    },
    {
      id: 'schedule-iii',
      title: 'Schedule III - Storage & Warehousing',
      description: 'Storage charges for various types of cargo and warehousing services',
      icon: Package,
      items: [
        'Container Yard Storage',
        'Bulk Cargo Storage',
        'Warehouse Storage',
        'Open Yard Storage',
        'Hazardous Cargo Storage'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 10, 2024'
    },
    {
      id: 'schedule-iv',
      title: 'Schedule IV - Equipment Services',
      description: 'Crane hire, equipment usage, and mechanized handling charges',
      icon: Anchor,
      items: [
        'Crane Hire Charges',
        'Reach Stacker Usage',
        'Forklift Operations',
        'Conveyor System Usage',
        'Mobile Equipment Hire'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 12, 2024'
    },
    {
      id: 'schedule-v',
      title: 'Schedule V - Miscellaneous Services',
      description: 'Additional port services including utilities and special arrangements',
      icon: Clock,
      items: [
        'Fresh Water Supply',
        'Electrical Power Supply',
        'Waste Disposal Services',
        'Security Services',
        'Communication Services'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 8, 2024'
    },
    {
      id: 'schedule-vi',
      title: 'Schedule VI - OSV Operations', 
      description: 'Offshore Supply Vessel services and related charges',
      icon: Ship,
      items: [
        'OSV Berth Charges',
        'Supply Base Operations',
        'Crew Boat Services',
        'Equipment Transfer',
        'Helicopter Landing Charges'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 18, 2024'
    },
    {
      id: 'schedule-vii',
      title: 'Schedule VII - Container Terminal',
      description: 'Specialized container terminal services and CFS operations',
      icon: Package,
      items: [
        'Container Freight Station',
        'Reefer Container Services',
        'Container Repair',
        'Documentation Services',
        'Customs Examination'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 22, 2024'
    },
    {
      id: 'schedule-viii',
      title: 'Schedule VIII - Liquid Cargo',
      description: 'Specialized charges for liquid cargo handling and storage',
      icon: Scale,
      items: [
        'Liquid Bulk Handling',
        'Pipeline Usage Charges',
        'Tank Storage',
        'Pumping Services',
        'Hose Connection Charges'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 14, 2024'
    },
    {
      id: 'schedule-ix',
      title: 'Schedule IX - Railway Services',
      description: 'Rail connectivity services and related transportation charges',
      icon: Package,
      items: [
        'Railway Siding Charges',
        'Wagon Loading/Unloading',
        'Track Usage Fees',
        'Shunting Services',
        'Railway Documentation'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 16, 2024'
    },
    {
      id: 'schedule-x',
      title: 'Schedule X - Special Services',
      description: 'Premium and emergency services with applicable surcharges',
      icon: Clock,
      items: [
        'Emergency Operations',
        'Holiday/Night Surcharges',
        'Express Handling',
        'VIP Services',
        'Overtime Charges'
      ],
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 25, 2024'
    }
  ];

  const toggleSchedule = (scheduleId: string) => {
    setExpandedSchedule(expandedSchedule === scheduleId ? null : scheduleId);
  };

  const keyHighlights = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Industry-competitive pricing structure with transparent billing"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock services with minimal additional charges"
    },
    {
      icon: Scale,
      title: "Flexible Pricing",
      description: "Volume-based discounts and customized pricing options"
    },
    {
      icon: FileText,
      title: "Clear Documentation",
      description: "Detailed tariff schedules with comprehensive service descriptions"
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
            <FileText className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tariff Schedule</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive pricing structure for all port services, 
              cargo handling, and maritime operations at Kakinada Seaports
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tariff Highlights</h2>
            <p className="text-xl text-gray-600">Transparent and competitive pricing with value-added services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tariff Schedules */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Tariff Schedules</h2>
            <p className="text-xl text-gray-600">Complete breakdown of charges for all port services and operations</p>
          </motion.div>

          <div className="space-y-4">
            {schedules.map((schedule, index) => (
              <motion.div
                key={schedule.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSchedule(schedule.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <schedule.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{schedule.title}</h3>
                        <p className="text-gray-600">{schedule.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                      {expandedSchedule === schedule.id ? (
                        <ChevronUp className="h-6 w-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedSchedule === schedule.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-gray-100"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Services Included:</h4>
                        <ul className="space-y-2">
                          {schedule.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-600 mb-1">Effective Date:</h4>
                          <p className="text-lg font-semibold text-blue-600">{schedule.effectiveDate}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-600 mb-1">Last Updated:</h4>
                          <p className="text-lg font-semibold text-green-600">{schedule.lastUpdated}</p>
                        </div>
                        <div className="text-center">
                          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                            View Detailed Pricing
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Custom Pricing */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <DollarSign className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h2 className="text-4xl font-bold mb-6">Need Custom Pricing?</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              We offer flexible pricing solutions for high-volume customers, 
              long-term contracts, and specialized service requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Request Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tariff;