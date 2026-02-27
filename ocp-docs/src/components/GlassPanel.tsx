'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlassPanel({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}