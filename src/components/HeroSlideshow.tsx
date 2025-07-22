import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  ArrowRight,
  Anchor,
  Ship,
  Camera,
  Phone,
  Briefcase
} from 'lucide-react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Welcome to Kakinada Seaports",
      subtitle: "India's Gateway to Maritime Excellence",
      description: "Strategically positioned between Vizag and Chennai, we provide world-class port services with state-of-the-art infrastructure.",
      buttonText: "Explore Our Services",
      action: () => navigate('/services'),
      icon: Anchor,
      background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
      image: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg"
    },
    {
      id: 2,
      title: "Port Information",
      subtitle: "Advanced Maritime Infrastructure",
      description: "Discover our comprehensive port facilities including 7 berths at Main Jetty, OSV operations, and NRW extensions.",
      buttonText: "View Port Details",
      action: () => navigate('/port-info'),
      icon: Ship,
      background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)",
      image: "https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg"
    },
    {
      id: 3,
      title: "Our Work",
      subtitle: "Strategic Operations & Global Reach",
      description: "From SEZ operations to global exports of agri products, granite, and minerals through our advanced logistics network.",
      buttonText: "See Our Work",
      action: () => navigate('/our-work'),
      icon: Briefcase,
      background: "linear-gradient(135deg, #164e63 0%, #0891b2 50%, #06b6d4 100%)",
      image: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg"
    },
    {
      id: 4,
      title: "Gallery",
      subtitle: "Visual Journey Through Our Operations",
      description: "Explore our state-of-the-art facilities, operations, and the maritime excellence that defines Kakinada Seaports.",
      buttonText: "View Gallery",
      action: () => navigate('/gallery'),
      icon: Camera,
      background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #4f46e5 100%)",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
    },
    {
      id: 5,
      title: "Contact Us",
      subtitle: "Connect With Maritime Experts",
      description: "Ready to discuss your maritime needs? Our team is available 24/7 to provide exceptional port services and support.",
      buttonText: "Get In Touch",
      action: () => navigate('/contact'),
      icon: Phone,
      background: "linear-gradient(135deg, #075985 0%, #0284c7 50%, #0ea5e9 100%)",
      image: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { icon: IconComponent } = slides[currentSlide];

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Overlay */}
          <div 
            className="absolute inset-0"
            style={{ background: slides[currentSlide].background, opacity: 0.8 }}
          />
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white px-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <IconComponent className="h-16 w-16 mx-auto mb-4 text-sky-300" />
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.h2
                className="text-2xl md:text-3xl font-light mb-6 text-sky-200"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.button
                onClick={slides[currentSlide].action}
                className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{slides[currentSlide].buttonText}</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
        <motion.button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play control */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`p-2 rounded-full backdrop-blur-sm transition-all ${
            isAutoPlay 
              ? 'bg-white/20 text-white hover:bg-white/30' 
              : 'bg-white/40 text-white/70 hover:bg-white/50'
          }`}
        >
          <Play className={`h-4 w-4 ${!isAutoPlay && 'opacity-50'}`} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlideshow;
