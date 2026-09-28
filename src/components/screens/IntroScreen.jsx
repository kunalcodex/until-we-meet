import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Button from '../Button';
import { introHeading, introSubtext } from '@/data';

function IntroScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-center relative">

            <div className="bg-blob w-64 h-64 bg-pink-200 top-20 left-10"></div>
            <div className="bg-blob w-72 h-72 bg-rose-200 bottom-20 right-10" style={{ animationDelay: '2s' }}></div>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.75,
                    y: 25
                }}

                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}

                transition={{
                    type: "spring",
                    damping: 18,
                    stiffness: 140
                }}
                className="mb-8 relative z-10 will-change-transform"
            >
                <div className="bg-white p-6 rounded-full shadow-[0_10px_30px_rgba(251,113,133,0.2)] border-4 border-pink-50">
                    <img src="/gifs/cute.gif" className='w-24 md:w-28' alt="cute hug" />
                </div>
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute -top-1 -right-1 bg-rose-400 text-white rounded-full p-1.5 shadow-lg will-change-transform"
                >
                    <Heart size={14} className="fill-white" />
                </motion.div>
            </motion.div>

            <motion.h1
                className="text-5xl md:text-6xl text-slate-700 mb-4 font-semibold z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {introHeading.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-pink-400">
                    {introHeading.split(" ").pop()}
                </span>
            </motion.h1>

            <motion.p
                className="text-2xl md:text-3xl text-slate-500 font-hand font-semibold max-w-sm mx-auto mb-12 z-10 will-change-transform"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                {introSubtext}
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, type: "spring", damping: 18, stiffness: 200 }}>
                <Button onClick={onNext} text="Let's Begin" />
            </motion.div>
        </div>
    )
}

export default IntroScreen