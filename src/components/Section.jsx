import React from 'react';
import { motion } from 'framer-motion';

export function Section({ title, children }) {
  return (
    <section className="py-10 md:py-12 border-t border-slate-800/50">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 md:mb-8 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-blue-500 after:rounded-full"
      >
        {title}
      </motion.h3>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
