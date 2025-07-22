import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PortInfo from './pages/PortInfo';
import PortLayout from './pages/PortLayout';
import Tariff from './pages/Tariff';
import OurWork from './pages/OurWork';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/port-info" element={<PortInfo />} />
          <Route path="/port-layout" element={<PortLayout />} />
          <Route path="/tariff" element={<Tariff />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;