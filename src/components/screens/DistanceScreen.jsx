import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Button from '../Button';
import { distance, names } from '@/data';

function DistanceScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-between h-full w-full relative">
            <div className="bg-blob w-96 h-96 bg-blue-100 top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            <motion.div
                className="text-center z-10 mt-10 will-change-transform"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-700">
                    <span className="text-rose-400">{distance}</span> <br /> between us
                </h2>
            </motion.div>

            {/* SVG Distance Animation Graphic */}
            <div className="relative max-[350px]:w-70 w-88 sm:w-96 h-64 sm:h-74 my-12">
                <div className='absolute inset-0 w-full flex items-center justify-center map-noise rounded-2xl opacity-22' />
                <svg viewBox="0 0 300 150" className="absolute inset-0 w-full h-full overflow-visible drop-shadow-sm">
                    <defs>
                        <clipPath id="line-clip">
                            <motion.rect
                                x="0" y="-50" height="250"
                                initial={{ width: 0 }}
                                animate={{ width: 350 }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 1.4 }}
                            />
                        </clipPath>
                    </defs>

                    {/* Dotted Curve */}
                    <path
                        d="M 30 128
                        C 80 120,
                            120 20,
                            170 50
                        S 230 35,
                            258 25"
                        fill="none"
                        stroke="#EC4899"
                        strokeWidth="2.5"
                        strokeDasharray="7 7"
                        strokeLinecap="round"
                        clipPath="url(#line-clip)"
                    />
                </svg>

                {/* Me Pin */}
                <motion.div
                    className="absolute flex flex-col items-center will-change-transform"
                    style={{ left: '2%', top: '55%', transform: 'translate(-50%, -50%)' }}
                    initial={{ scale: 0, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", damping: 12, delay: 0.2 }}
                >
                    <span className="mb-2 font-semibold text-rose-500 bg-white/80 px-3 py-1 rounded-full text-sm shadow-sm">
                        {names.me}
                    </span>
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="bg-white p-3 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-2 border-pink-100 will-change-transform"
                    >
                        <MapPin className="w-6.5 h-6.5 text-blue-400 fill-blue-200" />
                    </motion.div>
                </motion.div>

                {/* You Pin */}
                <motion.div
                    className="absolute flex flex-col items-center will-change-transform"
                    style={{ left: '84%', top: '15%', transform: 'translate(-50%, -50%)' }}
                    initial={{ scale: 0, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", damping: 12, delay: 0.8 }}
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                        className="bg-white p-3 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-2 border-pink-100 mb-2 will-change-transform"
                    >
                        <MapPin className="w-6.5 h-6.5 text-rose-400 fill-rose-200" />
                    </motion.div>
                    <span className="font-semibold text-rose-500 bg-white/80 px-3 py-1 rounded-full text-sm shadow-sm">
                        {names.you}
                    </span>
                </motion.div>
            </div>

            <motion.div
                className="text-center z-10 mb-10 w-full will-change-transform"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.6, duration: 0.8 }}
            >
                <p className="text-2xl md:text-3xl text-slate-600 font-semibold font-hand">
                    ...but <span className="text-rose-500 font-bold mx-1">never</span> between our hearts.
                </p>
                <div className="mt-8">
                    <Button onClick={onNext} />
                </div>
            </motion.div>
        </div>
    );
}

export default DistanceScreen