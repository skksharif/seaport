import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'operations', label: 'Operations' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'vessels', label: 'Vessels' },
    { id: 'equipment', label: 'Equipment' },
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg',
      title: 'Port Overview',
      category: 'facilities',
      description: 'Aerial view of Kakinada Seaports infrastructure'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg',
      title: 'Container Operations',
      category: 'operations',
      description: 'Container loading operations at Main Jetty'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
      title: 'Bulk Cargo Handling',
      category: 'operations',
      description: 'Bulk cargo handling operations'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      title: 'Port at Sunset',
      category: 'facilities',
      description: 'Beautiful sunset view of the port'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg',
      title: 'Container Terminal',
      category: 'facilities',
      description: 'State-of-the-art container terminal'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2144328/pexels-photo-2144328.jpeg',
      title: 'Cargo Ship',
      category: 'vessels',
      description: 'Large cargo vessel at berth'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
      title: 'Loading Operations',
      category: 'operations',
      description: 'Heavy cargo loading operations'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg',
      title: 'Port Infrastructure',
      category: 'facilities',
      description: 'Modern port infrastructure'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg',
      title: 'Crane Operations',
      category: 'equipment',
      description: 'Modern crane equipment in operation'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg',
      title: 'Container Stacking',
      category: 'equipment',
      description: 'Container stacking equipment'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      title: 'OSV Operations',
      category: 'vessels',
      description: 'Offshore Supply Vessel operations'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg',
      title: 'Night Operations',
      category: 'operations',
      description: '24/7 port operations during night'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
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
            <Camera className="h-16 w-16 mx-auto mb-6 text-sky-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Explore our maritime operations, state-of-the-art facilities, 
              and the impressive scale of Kakinada Seaports
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Maximize2 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-200">
                  {filteredImages[selectedImage].description}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;