import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import Button from '../Button';
import { letterScreenHeading, letterScreenTopText, letterText, letterTop } from '@/data';

export default function LetterScreen({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      {/* Soft background blobs */}
      <div className="bg-blob w-87.5 h-87.5 bg-pink-100 top-[-5%] right-[-5%] opacity-50 absolute pointer-events-none"></div>
      <div className="bg-blob w-75 h-75 bg-rose-100 bottom-[-5%] left-[-5%] opacity-50 absolute pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mt-2 md:mt-4 shrink-0"
      >
        <span className="text-rose-400 font-bold tracking-widest uppercase text-xs mb-1 block opacity-90">
          {letterScreenTopText}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-1">
          {letterScreenHeading}
        </h2>
      </motion.div>

      {/* Envelope & Stationery Paper Container */}
      <div className="relative w-full max-w-md my-10 flex items-center justify-center z-10 min-h-100 md:min-h-110">

        <AnimatePresence>
          {isOpen && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`heart-burst-${i}`}
                  initial={{ opacity: 0, y: 20, x: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: -200 - Math.random() * 250,
                    x: (Math.random() - 0.5) * 250,
                    scale: 0.5 + Math.random(),
                    rotate: (Math.random() - 0.5) * 120
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 1.2,
                    delay: Math.random() * 0.2,
                    ease: "easeOut"
                  }}
                  className="absolute will-change-transform"
                >
                  <Heart className="text-pink-400 fill-pink-300 drop-shadow-sm" size={24} />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer relative w-72 md:w-80 h-52 md:h-56 bg-rose-100/90 rounded-2xl shadow-[0_15px_30px_rgba(244,114,182,0.2)] border-2 border-pink-200 flex flex-col items-center justify-center p-4 overflow-hidden group will-change-transform"
            >
              {/* Envelope Flap visual clip */}
              <div
                className="absolute top-0 left-0 w-full h-28 bg-rose-200/80 rounded-t-2xl border-b-2 border-rose-300/50"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              ></div>

              {/* Animated Heart Seal Stamp */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="z-20 bg-rose-400 text-white rounded-full p-4 shadow-lg group-hover:bg-pink-500 transition-colors flex items-center justify-center border-4 border-white"
              >
                <Heart className="w-8 h-8 fill-white text-white" />
              </motion.div>

              <span className="z-20 font-bold text-sm text-rose-500 tracking-wider uppercase mt-3">
                Tap To Open
              </span>

              {/* Cute Postage Stamp top-right */}
              <div className="absolute top-3 right-3 w-8 h-10 border-2 border-dashed border-rose-300/80 rounded flex items-center justify-center bg-white/40">
                <Sparkles className="w-4 h-4 text-rose-400" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 120 }}
              className="relative w-full h-100 md:h-110 bg-[#FFFBF5] rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex flex-col will-change-transform"
              style={{
                backgroundImage: 'radial-gradient(#FDE68A 0.6px, transparent 0.6px)',
                backgroundSize: '18px 18px'
              }}
            >
              <div className="paper-bg opacity-85 absolute inset-0"></div>
              {/* Washi tape at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-200/60 -rotate-1 backdrop-blur-[2px] z-20 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-white/60 mix-blend-multiply"></div>

              {/* Letter Header Bar */}
              <div className="pt-6 pb-2 px-6 flex items-center justify-between border-b border-black/5 bg-[#FFFDF9]/40 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex items-center gap-2">
                  <Heart size={18} className="text-pink-400 fill-pink-300" />
                  <span className="font-bold text-slate-600 text-sm md:text-base">{letterTop}</span>
                </motion.div>
                <motion.span
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Sparkles size={16} className="text-amber-400" />
                </motion.span>
              </div>

              {/* Scrollable Letter Body */}
              <div className="overflow-y-auto h-80 md:h-90 p-6 md:p-8 pb-10 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="font-hand text-slate-700 text-xl md:text-2xl leading-relaxed whitespace-pre-wrap">
                  {letterText}
                </motion.div>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#FFFBF5] via-[#FFFBF5]/90 to-transparent" />

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className={`${!isOpen && "pointer-events-none"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isOpen && { opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <Button onClick={onNext} text="One Last Thing" icon={<Sparkles size={18} />} animateIcon={false} />
      </motion.div>
    </div>
  );
}