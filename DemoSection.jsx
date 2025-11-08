import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 blur-3xl rounded-full" />
          
          {/* Content */}
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-sm">
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-gradient-to-br from-[#0A1929] to-[#1E3A5F] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Mock app content */}
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-white font-bold text-xl">ShintyLive</div>
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-blue-400" />
                        </div>
                      </div>
                      
                      {/* Live match card */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-4 shadow-lg"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          <span className="text-xs text-white/80 font-medium">LIVE</span>
                        </div>
                        <div className="flex justify-between items-center text-white">
                          <div className="text-center">
                            <div className="font-bold text-sm mb-1">Inverness</div>
                            <div className="text-3xl font-bold">3</div>
                          </div>
                          <div className="text-white/50 text-sm">VS</div>
                          <div className="text-center">
                            <div className="font-bold text-sm mb-1">Fort William</div>
                            <div className="text-3xl font-bold">2</div>
                          </div>
                        </div>
                        <div className="text-center text-xs text-white/60 mt-2">64' - Second Half</div>
                      </motion.div>

                      {/* Upcoming matches */}
                      {[1, 2].map((i) => (
                        <div key={i} className="bg-blue-950/40 rounded-xl p-3 border border-blue-500/10">
                          <div className="flex justify-between items-center text-white/80 text-sm">
                            <span>Match {i + 1}</span>
                            <span className="text-xs text-blue-400">Tomorrow 15:00</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -right-4 top-20 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-4 bottom-32 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🏆</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <span className="text-sm text-blue-300">Experience</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                Shinty in the Palm of Your Hand
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Access live scores, match updates, and comprehensive statistics wherever you are. 
                ShintyLive brings the excitement of Scotland's ancient sport directly to your mobile device.
              </p>

              <div className="space-y-4">
                {[
                  'Real-time match updates and notifications',
                  'Detailed team and player statistics',
                  'Interactive league tables and fixtures',
                  'Historical match data and archives'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}