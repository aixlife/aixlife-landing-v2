import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const TOPICS = [
  {
    title: "바이브코딩",
    desc: "비개발자를 위한 AI 기반 앱/웹서비스 구축. 자연어로 코딩하는 새로운 개발 패러다임 교육."
  },
  {
    title: "AI 리터러시 & 사고력",
    desc: "AI 시대의 문제 발견 프레임워크. 무엇을 시킬 것인가를 스스로 설계하는 근본적인 사고력 훈련."
  },
  {
    title: "생성형 AI 업무 활용",
    desc: "ChatGPT, Claude, Gemini를 활용한 실무 생산성 향상. 보고서, 기획안, 이메일 등 문서 작업 최적화."
  },
  {
    title: "AI 마케팅 & 콘텐츠 제작",
    desc: "AI를 활용한 이미지, 영상, 음악 생성 및 SNS 자동화. 퍼포먼스 마케팅 효율 극대화 전략."
  },
  {
    title: "AI 비즈니스 자동화",
    desc: "반복적인 업무를 대체하는 자동화 시스템 설계 및 기업 맞춤형 AI 에이전트 구축 컨설팅."
  },
  {
    title: "산업별 맞춤 AI 교육",
    desc: "디자이너, 피트니스, 이커머스, 학생 등 특정 직군과 대상의 니즈에 맞춘 특화 커리큘럼 제공."
  }
];

export function ExpansionV2() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0); // Default first one expanded

  return (
    <section id="curriculum" className="bg-white px-4 md:px-8 pb-32">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="bg-[#FFE87A] rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-16 shadow-sm border border-black/5">
            {/* Header */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 justify-between items-start">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-black break-keep text-balance lg:w-1/2">
                AI 도입은 어렵지만,<br />AIXLIFE가 쉽게 만듭니다.
              </h2>
              <div className="lg:w-1/2 max-w-xl">
                <p className="text-xl md:text-2xl font-bold text-black/80 leading-snug break-keep text-balance mb-8">
                  증명된 실무 밀착형 커리큘럼으로 조직의 역량을 스케일업 합니다.
                </p>
                <div className="flex gap-4">
                  <span className="bg-black text-[#FFE87A] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm">Curriculum</span>
                  <span className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm border border-black/10">Programs</span>
                </div>
              </div>
            </div>

            {/* Accordion Layout of 6 Topics */}
            <div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-2 md:gap-4 overflow-hidden">
              {TOPICS.map((topic, idx) => {
                const isHovered = hoveredIdx === idx;
                
                return (
                  <motion.div 
                    key={idx} 
                    onMouseEnter={() => setHoveredIdx(idx)}
                    animate={{ 
                      flexGrow: isHovered ? 4 : 1,
                      flexBasis: isHovered ? "40%" : "10%"
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="bg-black text-white rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group hover-target min-h-[150px] md:min-h-0 cursor-default border border-white/10"
                    style={{ minWidth: "120px" }}
                  >
                    
                    <div className="relative z-10 flex flex-col h-full items-start">
                      <div className="flex flex-col items-center">
                        <span className="w-10 h-10 shrink-0 rounded-full border-2 border-[#FFE87A] text-[#FFE87A] flex items-center justify-center text-sm font-black mb-4">
                          {idx + 1}
                        </span>
                        
                        {/* Vertical Title (Desktop only) */}
                        {!isHovered && (
                          <div 
                            className="hidden md:block text-[#FFE87A] font-bold text-xs whitespace-nowrap"
                            style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.05em' }}
                          >
                            {topic.title}
                          </div>
                        )}
                      </div>
                      
                      <motion.h3 
                        animate={{ opacity: isHovered ? 1 : 0, width: isHovered ? "auto" : 0 }}
                        className="font-bold tracking-widest uppercase text-[#FFE87A] text-xs opacity-80 whitespace-nowrap overflow-hidden absolute left-[60px] top-3"
                      >
                        Module 0{idx + 1}
                      </motion.h3>
                      
                      <div className={`mt-auto transition-opacity duration-300 ${isHovered ? 'opacity-100 delay-200' : 'opacity-0 md:opacity-0 md:hidden'}`}>
                         <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight mb-4 break-keep text-white">
                           {topic.title}
                         </h4>
                         <p className="font-bold text-sm lg:text-base leading-relaxed break-keep text-white/70">
                           {topic.desc}
                         </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
