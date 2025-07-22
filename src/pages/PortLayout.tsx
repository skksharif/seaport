import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Info, 
  Maximize2, 
  ZoomIn, 
  Navigation,
  Anchor,
  Ship,
  Ruler
} from 'lucide-react';

const PortLayout = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const portAreas = [
    {
      id: 'main-jetty',
      name: 'Main Jetty',
      berths: '7 Berths + OSV',
      depth: '12-14m',
      length: '1,680m',
      description: 'Primary cargo handling facility with multiple berths for various vessel types',
      coordinates: { x: 300, y: 200, width: 400, height: 80 }
    },
    {
      id: 'osv-jetty',
      name: 'OSV Jetty',
      berths: '3 Berths',
      depth: '8-10m',
      length: '400m',
      description: 'Dedicated Offshore Supply Vessel operations facility',
      coordinates: { x: 150, y: 320, width: 200, height: 60 }
    },
    {
      id: 'nrw-north',
      name: 'NRW North Extension',
      berths: '2 Berths',
      depth: '10-12m', 
      length: '300m',
      description: 'Northern extension for specialized cargo operations',
      coordinates: { x: 750, y: 150, width: 180, height: 60 }
    },
    {
      id: 'nrw-south',
      name: 'NRW South Extension',
      berths: '2 Berths',
      depth: '10-12m',
      length: '300m',
      description: 'Southern extension with advanced mooring systems',
      coordinates: { x: 750, y: 350, width: 180, height: 60 }
    },
    {
      id: 'channel',
      name: 'Navigational Channel',
      berths: 'Main Access',
      depth: '14m',
      length: '12km',
      description: 'Main shipping channel with 200m width',
      coordinates: { x: 50, y: 450, width: 900, height: 40 }
    }
  ];

  const facilities = [
    {
      id: 'container-yard',
      name: 'Container Yard',
      icon: '📦',
      position: { x: 400, y: 100 }
    },
    {
      id: 'bulk-storage',
      name: 'Bulk Storage',
      icon: '🏭',
      position: { x: 600, y: 120 }
    },
    {
      id: 'liquid-terminal',
      name: 'Liquid Terminal',
      icon: '🛢️',
      position: { x: 200, y: 150 }
    },
    {
      id: 'admin-building',
      name: 'Admin Building',
      icon: '🏢',
      position: { x: 500, y: 50 }
    }
  ];

  const handleAreaClick = (areaId: string) => {
    setSelectedArea(selectedArea === areaId ? null : areaId);
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
            <MapPin className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Port Layout</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Interactive overview of our comprehensive port infrastructure, 
              berth arrangements, and facility locations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Port Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Port Map</h2>
            <p className="text-xl text-gray-600">Click on different areas to explore detailed information</p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 shadow-lg">
            <div className="relative">
              {/* SVG Port Layout */}
              <svg 
                viewBox="0 0 1000 550" 
                className="w-full h-auto bg-blue-100 rounded-xl border-2 border-blue-200"
              >
                {/* Water Background */}
                <rect x="0" y="400" width="1000" height="150" fill="#3B82F6" opacity="0.3" />
                
                {/* Port Areas */}
                {portAreas.map((area) => (
                  <g key={area.id}>
                    <rect
                      x={area.coordinates.x}
                      y={area.coordinates.y}
                      width={area.coordinates.width}
                      height={area.coordinates.height}
                      fill={selectedArea === area.id ? '#1D4ED8' : hoveredArea === area.id ? '#3B82F6' : '#60A5FA'}
                      stroke="#1E40AF"
                      strokeWidth="2"
                      rx="8"
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredArea(area.id)}
                      onMouseLeave={() => setHoveredArea(null)}
                      onClick={() => handleAreaClick(area.id)}
                    />
                    <text
                      x={area.coordinates.x + area.coordinates.width / 2}
                      y={area.coordinates.y + area.coordinates.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {area.name}
                    </text>
                  </g>
                ))}

                {/* Facilities */}
                {facilities.map((facility) => (
                  <g key={facility.id}>
                    <circle
                      cx={facility.position.x}
                      cy={facility.position.y}
                      r="15"
                      fill="#F97316"
                      stroke="#EA580C"
                      strokeWidth="2"
                      className="cursor-pointer"
                    />
                    <text
                      x={facility.position.x}
                      y={facility.position.y + 5}
                      textAnchor="middle"
                      fontSize="12"
                      className="pointer-events-none"
                    >
                      {facility.icon}
                    </text>
                  </g>
                ))}

                {/* Navigation Aids */}
                <g>
                  <circle cx="100" cy="500" r="8" fill="#EF4444" />
                  <text x="120" y="505" fontSize="10" fill="#666">Port Entry</text>
                </g>
                
                {/* Scale Reference */}
                <g>
                  <line x1="50" y1="520" x2="150" y2="520" stroke="#374151" strokeWidth="2" />
                  <text x="100" y="535" textAnchor="middle" fontSize="10" fill="#374151">500m</text>
                </g>
              </svg>

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold mb-3">Legend</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-400 rounded"></div>
                    <span>Berth Areas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <span>Facilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-300"></div>
                    <span>Water Area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Details */}
      {selectedArea && (
        <section className="py-8 bg-gradient-to-br from-blue-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {portAreas.filter(area => area.id === selectedArea).map((area) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Anchor className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{area.name}</h3>
                </div>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Ship className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Berths</span>
                    </div>
                    <p className="text-xl font-bold text-blue-600">{area.berths}</p>
                  </div>
                  <div className="bg-sky-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Navigation className="h-5 w-5 text-sky-600" />
                      <span className="font-semibold">Depth</span>
                    </div>
                    <p className="text-xl font-bold text-sky-600">{area.depth}</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Ruler className="h-5 w-5 text-cyan-600" />
                      <span className="font-semibold">Length</span>
                    </div>
                    <p className="text-xl font-bold text-cyan-600">{area.length}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Port Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Info className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Detailed infrastructure and capacity information</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Channel Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Length:</span>
                  <span className="font-semibold">12 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Channel Width:</span>
                  <span className="font-semibold">200 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Maximum Depth:</span>
                  <span className="font-semibold">14 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tide Range:</span>
                  <span className="font-semibold">1.2 meters</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sky-50 to-cyan-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Berth Capacity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Berths:</span>
                  <span className="font-semibold">14 berths</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Main Jetty:</span>
                  <span className="font-semibold">7 + 1 OSV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">OSV Jetty:</span>
                  <span className="font-semibold">3 berths</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NRW Extensions:</span>
                  <span className="font-semibold">4 berths</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vessel Limits</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Max LOA:</span>
                  <span className="font-semibold">250 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Beam:</span>
                  <span className="font-semibold">45 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Draft:</span>
                  <span className="font-semibold">13.5 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max DWT:</span>
                  <span className="font-semibold">100,000 tons</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Maximize2 className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h2 className="text-4xl font-bold mb-6">Detailed Port Plans</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Download comprehensive port layout drawings, berth plans, 
              and technical specifications for detailed planning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2">
                <ZoomIn className="h-5 w-5" />
                <span>Download High-Res Layout</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2">
                <Info className="h-5 w-5" />
                <span>Technical Specifications</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortLayout;