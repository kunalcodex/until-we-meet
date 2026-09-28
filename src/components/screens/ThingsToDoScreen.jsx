import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart } from "lucide-react";
import Button from "../Button";
import { thingsToDo, thingsToDoHeading, thingsToDoSubtext } from "@/data";

function ThingsToDoScreen({ onNext }) {
    const [revealed, setRevealed] = useState(Array(thingsToDo.length).fill(false));

    const handleReveal = (index) => {
        const newRevealed = [...revealed];
        newRevealed[index] = true;
        setRevealed(newRevealed);
    };

    return (
        <div className="flex flex-col items-center h-full w-full relative">
            {/* Soft animated background elements */}
            <div className="bg-blob w-100 h-100 bg-rose-100 top-[-10%] left-[-10%] opacity-50"></div>
            <div className="bg-blob w-75 h-75 bg-amber-100 bottom-[-10%] right-[-5%] opacity-50" style={{ animationDelay: '2s' }}></div>

            <motion.div className="text-center z-10 mt-6 md:mt-8 mb-6 shrink-0 will-change-transform"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-2">
                    {thingsToDoHeading}
                </h2>
                <p className="text-xl md:text-2xl font-hand text-rose-500">{thingsToDoSubtext}</p>
            </motion.div>

            {/* Cute Tickets Grid */}
            <div className="w-full max-w-4xl mb-10 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 pt-2">
                    {thingsToDo.map((item, index) => {
                        const bgColors = ['bg-rose-50', 'bg-blue-50', 'bg-amber-50', 'bg-purple-50', 'bg-teal-50', 'bg-pink-50'];
                        // Darker pastel colors for the "wrapped" cover
                        const overlayColors = ['bg-rose-200', 'bg-blue-200', 'bg-amber-200', 'bg-purple-200', 'bg-teal-200', 'bg-pink-200'];
                        const iconColors = ['text-rose-400', 'text-blue-400', 'text-amber-400', 'text-purple-400', 'text-teal-400', 'text-pink-400'];

                        const bgColor = bgColors[index % bgColors.length];
                        const overlayColor = overlayColors[index % overlayColors.length];
                        const iconColor = iconColors[index % iconColors.length];
                        const isRevealed = revealed[index];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, type: "spring", damping: 15 }}
                                className="will-change-transform"
                            >
                                {/* The exact original wrapper to prevent layout shift */}
                                <motion.div
                                    whileHover={{ y: -5, scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                                    className="relative flex h-28 md:h-32 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] overflow-hidden group border border-slate-100 w-full"
                                >
                                    {/* Top and Bottom Cutouts on the perforation line */}
                                    <div className="absolute -top-3 left-24 md:left-28 -translate-x-1/2 w-6 h-6 bg-[#FFF5F5] rounded-full z-10 shadow-inner"></div>
                                    <div className="absolute -bottom-3 left-24 md:left-28 -translate-x-1/2 w-6 h-6 bg-[#FFF5F5] rounded-full z-10 shadow-inner"></div>

                                    {/* Left Ticket Stub */}
                                    <div className={`w-24 md:w-28 ${bgColor} flex flex-col items-center justify-center border-r-2 border-dashed border-slate-200 transition-colors shrink-0`}>
                                        <div className="bg-white p-2.5 rounded-full shadow-sm mb-1.5">
                                            <Heart size={28} className={iconColor} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                            #{index + 1}
                                        </span>
                                    </div>

                                    {/* Right Content */}
                                    <div className="flex-1 p-4 pl-5 md:pl-6 flex flex-col justify-center bg-white relative overflow-hidden">
                                        <h4 className="text-lg md:text-xl font-bold text-slate-700 leading-tight pr-8">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm md:text-base font-hand text-slate-500 mt-1 leading-snug pr-8">
                                            {item.desc}
                                        </p>

                                        {/* Heart Checkbox */}
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                            <Heart className="w-6 h-6 text-slate-200 group-hover:text-rose-400 group-hover:fill-rose-100 transition-all duration-300 transform group-hover:scale-110" strokeWidth={2} />
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {!isRevealed && (
                                            <motion.div
                                                initial={{ opacity: 1 }}
                                                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                                transition={{ duration: 0.4 }}
                                                onClick={() => handleReveal(index)}
                                                className={`absolute inset-0 z-30 flex flex-col items-center justify-center cursor-pointer overflow-hidden ${overlayColor}`}
                                            >
                                                {/* Subtle Polka Dots Pattern */}
                                                <div
                                                    className="absolute inset-0 opacity-40 pointer-events-none"
                                                    style={{
                                                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 2px, transparent 2px)',
                                                        backgroundSize: '16px 16px'
                                                    }}
                                                ></div>

                                                {/* Inner dashed voucher border */}
                                                <div className="absolute inset-2 md:inset-3 border-2 border-dashed border-white/70 rounded-xl pointer-events-none z-10"></div>

                                                {/* Cute bouncing solid heart icon */}
                                                <motion.div
                                                    animate={{ rotate: [0, -6, 6, -6, 6, 0], scale: [1, 1.05, 1] }}
                                                    transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.15 }}
                                                    className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-sm mb-1 z-10"
                                                >
                                                    <Heart size={20} className={`${iconColor} fill-current`} strokeWidth={2} />
                                                </motion.div>

                                                <span className={`font-medium text-[12px] md:text-[13px] uppercase tracking-wider z-10 mt-1 ${iconColor}`}>
                                                    Tap to reveal
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <Button onClick={onNext} animateIcon={false} text="See Our Memories" icon={<Camera size={18} />} />
            </motion.div>
        </div>
    );
};

export default ThingsToDoScreen