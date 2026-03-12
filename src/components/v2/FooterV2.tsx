import { Button } from "@/components/ui/button";

export function FooterV2() {
  return (
    <footer className="bg-black text-white px-6 py-20 rounded-t-[32px] md:rounded-t-[48px] -mt-10 relative z-10 overflow-hidden flex flex-col justify-between">
      <div className="max-w-[1600px] mx-auto w-full flex-grow flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="text-[60px] md:text-[100px] lg:text-[140px] font-black uppercase tracking-tighter leading-[0.8] flex items-start text-white">
            AI<span className="text-[#FFE87A]">X</span>LIFE
            <span className="text-xl md:text-3xl lg:text-5xl border-4 text-white border-white rounded-full w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 flex items-center justify-center ml-2 mt-2">R</span>
          </div>
          
          <div className="max-w-sm">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              WE TURN ORGANIZATIONS INTO AI EXPERTS
            </h3>
          </div>
        </div>

        <div className="border-t border-white/20 w-full mb-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          <div className="max-w-md">
            <p className="text-xl md:text-2xl font-bold text-white/80 leading-snug break-keep text-balance mb-8">
              복잡한 AI 도입, AIXLIFE가 검증된 교육 시스템으로 가장 쉽고 빠르게 해결해 드립니다.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-16 md:gap-32">
            <div className="space-y-4 flex flex-col items-start min-w-[120px]">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">MENU</p>
              <a href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors">대표 소개</a>
              <a href="#curriculum" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors">커리큘럼</a>
              <a href="#portfolio" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors">교육 실적</a>
              <a href="#contact" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors">도입 문의</a>
            </div>

            <div className="space-y-4 flex flex-col items-start min-w-[120px]">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">SNS</p>
              <a href="https://www.threads.com/@naminsoo_ai" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors flex items-center justify-between w-full max-w-[150px] gap-4">
                <span>Threads</span> <span className="text-[#FFE87A] text-[10px]">2.9만+</span>
              </a>
              <a href="https://www.instagram.com/naminsoo_ai/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors flex items-center justify-between w-full max-w-[150px] gap-4">
                <span>Instagram</span> <span className="text-[#FFE87A] text-[10px]">1만+</span>
              </a>
              <a href="https://open.kakao.com/me/naminsoo_ai" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors flex items-center justify-between w-full max-w-[150px] gap-4">
                <span>Kakao</span> <span className="text-[#FFE87A] text-[10px]">3.6k+</span>
              </a>
              <a href="https://www.youtube.com/@naminsoo_ai" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-[#FFE87A] transition-colors flex items-center justify-between w-full max-w-[150px] gap-4">
                <span>YouTube</span> <span className="text-[#FFE87A] text-[10px]">227</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 font-bold tracking-widest uppercase gap-4">
          <p>© AIXLIFE 2026</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          </div>
          <p>All rights reserved</p>
        </div>

      </div>
    </footer>
  );
}
