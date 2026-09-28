import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { finalScreenHeading, finalScreenSubtext } from '@/data';

export default function FinalScreen() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const floatingHearts = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 4,
        size: 12 + Math.random() * 14,
    }));

    return (
        <div className="flex flex-col items-center justify-center w-full h-full relative">

            {mounted && floatingHearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute pointer-events-none z-0"
                    style={{ left: heart.left, top: heart.top }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        y: [0, -80],
                        x: [0, (Math.random() - 0.5) * 40],
                        opacity: [0, 0.5, 0],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: heart.delay,
                    }}
                >
                    <Heart 
                        className="text-pink-300 fill-pink-200 opacity-50" 
                        size={heart.size} 
                    />
                </motion.div>
            ))}

            <div className="relative z-10 flex items-center justify-center h-48 w-48">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1.5 }}
                    className="absolute flex items-center justify-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        className="bg-rose-300 blur-[50px] w-40 h-40 rounded-full"
                    ></motion.div>
                </motion.div>
                
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ delay: 2.5, repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="relative flex items-center justify-center will-change-transform"
                >
                    {/* Heart SVG */}
                    <svg 
                        viewBox="0 0 24 24" 
                        className="w-32 h-32 md:w-40 md:h-40 overflow-visible drop-shadow-[0_10px_20px_rgba(244,114,182,0.5)]"
                    >
                        <motion.path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            initial={{ 
                                pathLength: 0, 
                                fill: "rgba(251, 113, 133, 0)",
                                stroke: "#E11D48",
                                strokeWidth: 1.5 
                            }}
                            animate={{
                                pathLength: 1,
                                fill: "rgba(251, 113, 133, 1)",
                            }}
                            transition={{
                                pathLength: { duration: 2, ease: "easeInOut" },
                                fill: { delay: 2.2, duration: 1, ease: "easeIn" }
                            }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    
                    {/* Cute smaller overlapping heart (Pops in after drawing) */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -20 }}
                        animate={{ scale: 1, opacity: 1, rotate: 10 }}
                        transition={{ delay: 2.6, type: "spring", damping: 10, stiffness: 100 }}
                        className="absolute -bottom-1 -right-4 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-[0_5px_15px_rgba(0,0,0,0.15)] border border-pink-100"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        >
                            <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-500 fill-rose-400" strokeWidth={1.5} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="text-center z-10">
                <motion.h1 
                    className="text-5xl md:text-6xl font-semibold text-slate-700 mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                >
                    {finalScreenHeading}
                </motion.h1>
                
                <motion.p
                    className="text-2xl md:text-3xl text-rose-500 font-hand"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                >
                    {finalScreenSubtext}
                </motion.p>
            </div>
        </div>
    );
}