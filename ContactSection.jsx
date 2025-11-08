import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get in touch with our support team',
    value: 'support@shintylive.co.uk',
    link: 'mailto:support@shintylive.co.uk',
    gradient: 'from-blue-500 to-cyan-500',
    emoji: '📧'
  },
  {
    icon: MessageCircle,
    title: 'TikTok',
    description: 'Follow us for highlights and updates',
    value: '@ShintyLive',
    link: 'https://www.tiktok.com/@ShintyLive',
    gradient: 'from-pink-500 to-purple-500',
    emoji: '🎵'
  },
  {
    icon: Send,
    title: 'Facebook',
    description: 'Join our community',
    value: '@ShintyLive',
    link: 'https://www.facebook.com/ShintyLive',
    gradient: 'from-blue-600 to-blue-700',
    emoji: '👍'
  }
];

function ContactCard({ method, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = method.icon;

  return (
    <motion.a
      ref={ref}
      href={method.link}
      target={method.link.startsWith('http') ? '_blank' : undefined}
      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative block"
    >
      {/* Hover glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
      />

      {/* Card */}
      <div className="relative h-full bg-gradient-to-br from-blue-950/60 to-blue-900/30 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 group-hover:scale-105">
        {/* Icon and emoji */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} p-0.5`}>
            <div className="w-full h-full rounded-2xl bg-[#0A1929] flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: index * 0.3
            }}
            className="text-4xl"
          >
            {method.emoji}
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
 