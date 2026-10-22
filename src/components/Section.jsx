import React from 'react';
import { motion } from 'framer-motion';

export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-12 sm:py-16 border-t border-border scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-main">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-sm text-text-muted ml-4">{subtitle}</p>
        )}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
