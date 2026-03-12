import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [end, duration, inView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function SuccessV2() {
  return (
    <section id="instructor" className="bg-white px-4 md:px-8 pb-32 text-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-black text-white rounded-[4rem] p-10 md:p-16 lg:p-24 shadow-sm relative overflow-hidden">
          
          {/* Decorative BG element */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFE87A]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

          <FadeIn className="grid lg:grid-cols-2 gap-16 mb-24 relative z-10">
            <div>
              <span className="text-[#FFE87A] font-black text-xs uppercase tracking-widest block mb-4 border border-[#FFE87A]/30 w-fit px-4 py-1 rounded-full">
                Instructor
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] break-keep text-balance mb-8 relative z-20">
                사람이 방향을 잡고,<br /> <span className="text-[#FFE87A]">AI가 실행한다</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-xl md:text-2xl font-bold text-white/80 leading-relaxed break-keep text-balance">
                안녕하세요, AIXLIFE 대표 <span className="text-[#FFE87A]">나민수</span>입니다. <br/><br/>
                저는 AI가 단순한 도구가 아닌, 업무의 본질을 바꾸는 파트너가 될 수 있다고 믿습니다. 
                각 조직의 상황에 맞는 실질적인 AI 활용 방안을 제시합니다.
              </p>
            </div>
          </FadeIn>

          {/* 3 Circle Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Circle 1 */}
            <StaggerItem>
              <div className="border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors duration-300 min-h-[400px]">
                <div className="w-56 h-56 rounded-full border-[4px] border-[#FFE87A] flex flex-col items-center justify-center relative z-10 p-6 shadow-[0_0_50px_rgba(255,232,122,0.15)] bg-black">
                  <h3 className="text-[#FFE87A] text-4xl xl:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
                    <CountUp end={600} suffix="+" /> <br/><span className="text-2xl">시간</span>
                  </h3>
                </div>
                <p className="text-sm font-bold text-white/60 tracking-widest uppercase mt-8 break-keep text-balance w-3/4">
                  전문적인 AI 실무 교육 누적 시간
                </p>
              </div>
            </StaggerItem>

            {/* Circle 2 (Image background) */}
            <StaggerItem>
              <div className="border border-white/10 bg-[#111] rounded-[3rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[400px] group">
                <h3 className="text-white text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-none relative z-20 mb-2 drop-shadow-2xl">
                  <CountUp end={1500} suffix="+" /> <br/><span className="text-3xl">수료생</span>
                </h3>
                
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                   <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" alt="Trainees" className="w-full h-full object-cover grayscale mix-blend-screen" />
                </div>
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                <p className="text-sm text-[#FFE87A] font-black tracking-widest uppercase mt-12 z-20 break-keep text-balance w-3/4 drop-shadow-md">
                  AIXLIFE와 함께 성장을 경험한 인적 스케일
                </p>
              </div>
            </StaggerItem>

            {/* Circle 3 */}
            <StaggerItem>
              <div className="border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors duration-300 min-h-[400px]">
                <div className="w-56 h-56 rounded-full border-[4px] border-[#FFE87A] flex flex-col items-center justify-center relative z-10 p-6 shadow-[0_0_50px_rgba(255,232,122,0.15)] bg-black">
                  <h3 className="text-[#FFE87A] text-4xl xl:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
                    <CountUp end={13} suffix="년" /> <br/><span className="text-2xl">경험</span>
                  </h3>
                </div>
                <p className="text-sm font-bold text-white/60 tracking-widest uppercase mt-8 break-keep text-balance w-3/4">
                  기획부터 운영까지 압도적인 필드 경험의 힘
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
