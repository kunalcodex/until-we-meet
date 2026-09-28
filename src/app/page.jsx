"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from '@/components/screens/IntroScreen';
import DistanceScreen from '@/components/screens/DistanceScreen';
import LastMetScreen from '@/components/screens/LastMetScreen';
import ThingsToDoScreen from '@/components/screens/ThingsToDoScreen';
import MemoriesScreen from '@/components/screens/MemoriesScreen';
import LetterScreen from '@/components/screens/LetterScreen';
import FinalScreen from '@/components/screens/FinalScreen';
import Music from '@/components/Music';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [musicOn, setMusicOn] = useState(false)

  const screens = [
    <IntroScreen key="intro" onNext={() => {
      setMusicOn(true)
      setCurrentScreen(1);
    }} />,
    <DistanceScreen key="distance" onNext={() => setCurrentScreen(2)} />,
    <LastMetScreen key="lastmet" onNext={() => setCurrentScreen(3)} />,
    <ThingsToDoScreen key="todo" onNext={() => setCurrentScreen(4)} />,
    <MemoriesScreen key="memories" onNext={() => setCurrentScreen(5)} />,
    <LetterScreen key="letter" onNext={() => setCurrentScreen(6)} />,
    <FinalScreen key="final" />
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden">

      <div className="noise fixed inset-0" />

      <Music shouldPlay={musicOn} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="will-change-transform px-5 py-8"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Watermark */}
      {/* <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-sm font-thin text-black/40 pointer-events-none z-50 tracking-wide">
        anujbuildsnp.in
      </motion.div> */}
    </div>
  );
}