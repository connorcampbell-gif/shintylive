import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles, Target, Award } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border border-blue-500/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-cyan-500/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Heart className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">About Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Our Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Shinty History */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full" />
              <div className="pl-8">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-4xl">🏑</span>
                  The Ancient Game
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Shinty is one of Scotland's oldest and most cherished sports, with roots stretching back over 2,000 years. 
                  This ancient stick-and-ball game has been played in the Highlands and Islands for centuries, 
                  carrying with it the spirit and culture of Scottish Gaelic communities.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  From clan battles to organized leagues, shinty has evolved while maintaining its fierce 
                  competitive spirit and deep connection to Scottish heritage. Today, teams across Scotland 
                  continue this proud tradition, bringing communities together in celebration of the game.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
 