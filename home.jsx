
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Zap, MapPin, Bell, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/showcase/Header';
import HeroSection from '../components/showcase/HeroSection';
import FeaturesSection from '../components/showcase/FeaturesSection';
import HowItWorksSection from '../components/showcase/HowItWorksSection';
import DemoSection from '../components/showcase/DemoSection';
import AboutSection from '../components/showcase/AboutSection';
import ContactSection from '../components/showcase/ContactSection';
import CTASection from '../components/showcase/CTASection';
import Footer from '../components/showcase/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1929] via-[#1E3A5F] to-[#0A1929] text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <DemoSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <CTASection />
        <Footer />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-blue-300/50 text-sm"
        >
          Scroll to explore
        </motion.div>
      </motion.div>
    </div>
  );
}

