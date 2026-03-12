import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HeaderV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white border-b-4 border-black text-black' : 'bg-transparent text-white'}`}>
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-4xl font-black tracking-tighter uppercase flex items-center gap-1 hover-target" onClick={() => setIsOpen(false)}>
            AI<span className="text-[#FFE87A]">X</span>LIFE
            <span className={`w-6 h-6 rounded-full border-[3px] flex items-center justify-center text-sm ${scrolled ? 'border-black' : 'border-white'}`}>R</span>
          </a>
          <nav className="flex items-center gap-2">
            <button 
              className={`font-bold uppercase rounded-full px-6 py-2 hover-target transition-all cursor-none ${scrolled ? 'bg-black text-white hover:bg-black/90' : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </nav>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-[#FFE87A] flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              {[
                { name: <>WHY AI<span className="text-black font-black">X</span>LIFE</>, href: "#why" },
                { name: "CURRICULUM", href: "#curriculum" },
                { name: "INSTRUCTOR", href: "#instructor" },
                { name: "PORTFOLIO", href: "#portfolio" },
                { name: "CONTACT", href: "#contact" }
              ].map((link, idx) => (
                <motion.a 
                  key={idx}
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  onClick={() => setIsOpen(false)}
                  className="text-black text-5xl md:text-7xl font-black uppercase tracking-tighter hover:text-white hover-target transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            
            <a 
              href="https://open.kakao.com/me/naminsoo_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-16 bg-black text-[#FFE87A] px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black hover-target transition-colors"
            >
              상담하기 →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
