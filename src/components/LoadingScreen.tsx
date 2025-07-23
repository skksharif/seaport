import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Waves } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          animate={{ 
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Anchor className="h-16 w-16 text-white mx-auto" />
     
        </motion.div>
        
        <motion.h1
          className="text-3xl font-bold text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Kakinada Seaports Ltd
        </motion.h1>
        
        <motion.div
          className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-sky-300 to-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 1.5 }}
          />
        </motion.div>
        
        <motion.p
          className="text-sky-200 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Loading your maritime gateway...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;