import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";

function Button({ onClick, text = "Keep Going", icon = <ChevronRight size={20} />, animateIcon = true }) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-50 group flex items-center justify-center gap-2 bg-linear-to-r from-pink-400 to-rose-400 text-white font-medium text-lg py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(244,114,182,0.4)] mx-auto will-change-transform"
        >
            {text}
            {animateIcon ? (
                <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    {icon}
                </motion.span>
            ) : (
                <span>{icon}</span>
            )}
        </motion.button>
    );
}

export default Button