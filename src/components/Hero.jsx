import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import profilePic from '../assets/jkp.jpg';

const iconMap = {
  Briefcase: FaLinkedinIn,
  Code: FaGithub,
  Camera: FaInstagram
};

export function Hero({ data }) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 md:py-0">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 w-full drop-shadow-sm pb-2">
            {data.name}
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium h-10 md:h-12 flex items-center">
            <Typewriter
              options={{
                strings: [
                  data.title,
                  'Google Associate Cloud Engineer',
                  'TensorFlow Developer'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 70,
                wrapperClassName: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm md:text-base text-slate-400 mt-6">
            <div className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-default">
              <MapPin size={16} className="shrink-0" />
              <span>{data.location}</span>
            </div>
            <a href={`tel:${data.phone}`} className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-400 hover:scale-110 transition-all duration-300">
              <Phone size={16} className="shrink-0" />
              <span>{data.phone}</span>
            </a>
            <a href={`mailto:${data.email}`} className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-400 hover:scale-110 transition-all duration-300">
              <Mail size={16} className="shrink-0" />
              <span className="break-all">{data.email}</span>
            </a>
            <a href={`https://${data.website}`} className="flex items-center gap-1.5 sm:gap-2 hover:text-emerald-400 hover:scale-110 transition-all duration-300">
              <Globe size={16} className="shrink-0" />
              <span>{data.website}</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-8 w-full">
            {data.socials?.map((social, index) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="p-2.5 sm:p-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
                >
                  {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 shrink-0 relative group mb-6 md:mb-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-blob"></div>
          <img src={profilePic} alt="Profile" className="relative w-full h-full object-cover rounded-full border-4 border-slate-800" />
        </motion.div>
      </div>
    </section>
  );
}
