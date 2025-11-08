import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, MapPin, Bell, Zap, Users, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Live Score Updates',
    description: 'Get instant notifications for goals, penalties, and match events as they happen in real-time.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPin,
    title: 'Scotland-Wide Coverage',
    description: 'Follow every shinty match across Scotland, from the Highlands to the Islands.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Personalized alerts for your favourite teams and players. Never miss a crucial moment.',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    icon: Trophy,
    title: 'League Tables',
    description: 'Track standings, statistics, and performance across all divisions and competitions.',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    icon: Users,
    title: 'Team Profiles',
    description: 'Detailed team information, player rosters, and historical match data at your fingertips.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: BarChart3,
    title: 'Match Statistics',
    description: 'In-depth analysis and statistics for every match, team, and player in the league.',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-blue-950/40 to-blue-900/20 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 hover:scale-105">
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
        
        {/* Icon */}
        <div className={`relative w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
          <div className="w-full h-full rounded-2xl bg-[#0A1929] flex items-center justify-center">
            <Icon className="w-7 h-7 text-blue-400" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-white">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Trophy className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive tools and features designed for the ultimate shinty experience
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}