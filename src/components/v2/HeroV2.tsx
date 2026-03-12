import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeuralNetworkBackground } from "./NeuralNetworkBackground";

export function HeroV2() {
  const words = ["AI 전문가", "업무 혁신가", "미래 리더"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);
  
  return (
    <section id="hero" className="pt-40 pb-32 px-4 md:px-8 bg-black rounded-b-[3rem] md:rounded-b-[4rem] text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden mb-16 md:mb-24">
      
      {/* Background Decor */}
      <NeuralNetworkBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent via-50% to-black/70 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <h1 className="text-[50px] md:text-[80px] lg:text-[110px] font-black leading-[1.1] tracking-tighter break-keep text-white">
          조직의 구성원을 <br className="hidden md:block" />
          <span className="inline-flex items-center align-middle h-[1.1em] bg-[#FFE87A] rounded-2xl overflow-hidden mx-2 md:mx-4 px-4 md:px-8 relative top-[-4px] align-baseline w-[280px] md:w-[450px]">
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={index}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -50, opacity: 0 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
                 className="absolute inset-0 flex items-center justify-center text-black text-[40px] md:text-[70px] lg:text-[90px] font-black leading-none pb-2 md:pb-4 w-full h-full"
               >
                 {words[index]}
               </motion.div>
             </AnimatePresence>
             
          </span> 
          로<br className="hidden md:block" /> 이끕니다
        </h1>
        <p className="mt-12 text-xl md:text-2xl font-bold text-white/60 tracking-tight break-keep text-balance max-w-2xl mx-auto">
          복잡한 AI 도입, AIXLIFE가 검증된 교육 시스템으로 가장 쉽고 빠르게 해결해 드립니다.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-xs font-black uppercase tracking-widest text-[#FFE87A]">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFE87A]"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
