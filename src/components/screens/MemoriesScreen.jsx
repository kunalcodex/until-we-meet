import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import Button from '../Button';
import { images } from '@/data';

function MemoriesScreen({ onNext }) {
    const [cards, setCards] = useState(images);

    const swipeCard = () => {
        if (cards.length > 1) {
            setCards(prev => prev.slice(1));
        }
    };

    const isLastCard = cards.length === 1;

    return (
        <div className="flex flex-col justify-center items-center w-full h-full relative">
            <motion.div
                className="text-center z-10 mt-6 will-change-transform"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-2">
                    Our Memories
                </h2>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={isLastCard ? 'last' : 'more'}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl md:text-2xl font-hand text-purple-400"
                    >
                        {isLastCard
                            ? "I cherish every moment with you"
                            : "Tap the photo to reveal the next"
                        }
                    </motion.p>
                </AnimatePresence>
            </motion.div>

            {/* Stacked Polaroids Layout */}
            <div className="relative w-full max-w-100 h-102.5 md:h-112.5 my-4 flex items-center justify-center">
                <AnimatePresence>
                    {cards.map((photo, index) => {
                        if (index > 2) return null;

                        const isTop = index === 0;

                        return (
                            <motion.div
                                key={photo}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{
                                    opacity: 1 - (index * 0.15),
                                    scale: 1 - (index * 0.05),
                                    y: index * 15,
                                    rotate: isTop ? 0 : (index % 2 === 0 ? 3 : -3),
                                    zIndex: cards.length - index
                                }}

                                exit={{ opacity: 0, x: -250, y: 40, rotate: -25, transition: { duration: 0.4, ease: "easeOut" } }}
                                transition={{ type: "spring", damping: 18 }}
                                className={`absolute left-1/2 -translate-x-1/2 inset-0 top-8 w-67.5 h-80 md:w-75 md:h-87.5 bg-[#fafafa] p-4 pb-16 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-pink-50 will-change-transform ${isTop && !isLastCard ? 'cursor-pointer' : ''}`}
                                onClick={isTop && !isLastCard ? swipeCard : undefined}
                                whileHover={isTop && !isLastCard ? { scale: 1.02, y: -5 } : {}}
                                whileTap={isTop && !isLastCard ? { scale: 0.98 } : {}}
                            >

                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-pink-300/40 -rotate-2 backdrop-blur-[2px] z-20 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-white/50 mix-blend-multiply"></div>

                                <div className="w-full h-full rounded-sm overflow-hidden shadow-inner border border-slate-100 bg-slate-100">
                                    <img
                                        src={photo}
                                        alt="Memory"
                                        className="w-full h-full object-contain pointer-events-none"
                                        draggable="false"
                                    />
                                </div>

                                <motion.div
                                    className="absolute bottom-5 right-5"
                                >
                                    <Heart className="w-6 h-6 text-pink-400 fill-pink-300" strokeWidth={1.5} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <motion.div className="shrink-0 z-10 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <Button onClick={onNext} text="A Letter For You" animateIcon={false} icon={<Mail size={18} />} />
            </motion.div>
        </div>
    );
};

export default MemoriesScreen