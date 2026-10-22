import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Check, Copy } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter, FaYoutube, FaFacebook, FaDribbble } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import profilePic from '../assets/jkp.jpg';

const iconMap = {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaDribbble
};

export function Hero({ data }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!data.email) return;
    navigator.clipboard.writeText(data.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const roleTags = [
    data.title,
    'Google Associate Cloud Engineer',
    'TensorFlow Developer'
  ];

  return (
    <section id="about" className="pt-24 sm:pt-28 pb-12 sm:pb-16 scroll-mt-24">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
        {/* Left Column: Text & Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full space-y-5"
        >
          {/* Main Title */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              Software Engineer & Cloud Architect
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-main mt-1">
              {data.name}
            </h1>
          </div>

          {/* Static Role Chips (Anti-AI-slop: No rotating typewriter loop) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
            {roleTags.map((role, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-surface border border-border text-text-secondary shadow-2xs"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Quick Contact & Location Metadata */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-text-muted">
            <div className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-text-muted shrink-0" />
              <span>{data.location}, Indonesia</span>
            </div>
            {data.phone && (
              <a 
                href={`tel:${data.phone}`} 
                className="inline-flex items-center gap-1.5 hover:text-text-main transition-colors"
              >
                <Phone size={14} className="text-text-muted shrink-0" />
                <span>{data.phone}</span>
              </a>
            )}
            {data.website && (
              <a 
                href={`https://${data.website}`} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-text-main transition-colors"
              >
                <Globe size={14} className="text-text-muted shrink-0" />
                <span>{data.website}</span>
              </a>
            )}
          </div>

          {/* Action Row: Copy Email & Social Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface border border-border hover:border-border-strong text-text-main text-xs sm:text-sm font-medium shadow-2xs hover:bg-surface-hover transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">Email copied!</span>
                </>
              ) : (
                <>
                  <Mail size={14} className="text-text-muted" />
                  <span>{data.email}</span>
                  <Copy size={12} className="text-text-muted opacity-70 ml-1" />
                </>
              )}
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5">
              {data.socials?.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="p-2.5 rounded-lg bg-surface border border-border text-text-muted hover:text-text-main hover:border-border-strong hover:bg-surface-hover transition-all"
                  >
                    {IconComponent && <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Picture Frame (Anti-AI-slop: Crisp squircle frame, no rainbow blobs) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="shrink-0 relative"
        >
          <div className="p-1.5 sm:p-2 rounded-2xl bg-surface border border-border shadow-md">
            <img
              src={profilePic}
              alt={data.name}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-cover rounded-xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
