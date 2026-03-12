import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function ContactV2() {
  return (
    <section id="contact" className="bg-white px-4 md:px-8 pb-32">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="bg-black rounded-[4rem] p-10 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] left-[-10%] w-[1000px] h-[1000px] bg-[#FFE87A]/5 blur-[100px] rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-2xl w-full">
            <h2 className="text-[#FFE87A] text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 break-keep text-balance">
              START<br/>YOUR NEXT<br/>STEP
            </h2>
            <p className="text-white/80 text-xl font-bold mb-12 break-keep text-balance">
              AI 교육 기획부터 강연 섭외, 비즈니스 컨설팅까지. AIXLIFE와 함께 가장 압도적인 성장을 시작하세요.
            </p>

            <div className="flex justify-center mt-12 w-full">
              <a 
                href="https://open.kakao.com/me/naminsoo_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FFE87A] text-black hover:bg-[#FFE87A]/90 py-6 px-12 rounded-full font-black uppercase text-xl md:text-2xl tracking-tight flex items-center justify-center gap-4 transition-colors w-full md:w-auto"
              >
                카카오톡으로 빠른 문의하기 <ArrowRight className="w-8 h-8" />
              </a>
            </div>
          </div>
          
        </FadeIn>
      </div>
    </section>
  );
}
