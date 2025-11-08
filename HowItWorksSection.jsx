import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Server, Bell, ArrowRight, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Shield,
    title: 'Admins Log Goals',
    description: 'Team admins witness a goal being scored and instantly log it on our dedicated admin dashboard. The goal data is immediately sent to our servers.',
    gradient: 'from-blue-500 to-cyan-500',
    image: '⚽'
  },
  {
    number: '02',
    icon: Server,
    title: 'Instant Processing',
    description: 'Our servers instantly identify all users following the teams in the match and prepare to send live notifications to every follower.',
    gradient: 'from-cyan-500 to-purple-500',
    image: '⚡'
  },
  {
    number: '03',
    icon: Bell,
    title: 'Real-Time Notifications',
    description: 'Followers receive push notifications just seconds after the real goal is scored. Experience the excitement in near real-time, wherever you are.',
    gradient: 'from-purple-500 to-blue-500',
    image: '📱'
  }
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Connecting line (not for last item) */}
      {index < steps.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
          className="hidden lg:block absolute top-24 left-[calc(100%-2rem)] w-[calc(100%+4rem)] h-0.5 bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 origin-left"
        >
          <motion.div
            animate={{ x: [-20, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ArrowRight className="w-5 h-5 text-cyan-400" />
          </motion.div>
        </motion.div>
      )}

      {/* Card */}
      <div className="relative group">
        {/* Glow effect */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 blur-2xl`}
        />

        {/* Card content */}
        <div className="relative bg-gradient-to-br from-blue-950/60 to-blue-900/30 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 h-full">
          {/* Step number */}
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A1929] to-[#1E3A5F] border-2 border-blue-500/30 flex items-center justify-center">
            <span className={`text-xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
              {step.number}
            </span>
          </div>

          {/* Icon with emoji */}
          <div className="flex items-center justify-between mb-6 mt-4">
 