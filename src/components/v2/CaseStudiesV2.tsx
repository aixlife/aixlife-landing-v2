import { FadeIn } from "@/components/ui/fade-in";

const PORTFOLIO_DATA = [
  // 기업/단체
  { org: "카카오 (카카오클래스)", desc: "소상공인 AI 활용 — e스토어 스마트 운영", tag: "기업/단체" },
  { org: "MKYU 플러스휴먼스쿨", desc: "AI 대화 설계 / 문제 발견 / GPTs 구축 / 콘텐트 제작", tag: "기업/단체" },
  { org: "엘리스그룹", desc: "AI를 활용한 비즈니스 원데이특강 외 1건", tag: "기업/단체" },
  { org: "라이프 해킹스쿨", desc: "AI 비즈니스 활용 VOD 강의", tag: "기업/단체" },
  { org: "천지세무법인", desc: "AX 컨설팅 — 자동화 시스템 설계 및 도입", tag: "기업/단체" },
  { org: "닥터서클", desc: "AX 컨설팅 — 의료 자가진단 웹앱 기획", tag: "기업/단체" },
  { org: "남이디자인", desc: "디자인팀·굿즈팀 AI 컨설팅/교육", tag: "기업/단체" },
  // 공공기관
  { org: "국민건강보험공단", desc: "직원 대상 AI 기초 활용 및 데이터 분석", tag: "공공기관" },
  { org: "부산정보산업진흥원", desc: "직장인을 위한 AI 제2의 두뇌 만들기", tag: "공공기관" },
  { org: "서울경제진흥원", desc: "AI 비즈니스 자동화 유튜브 시리즈 (6회)", tag: "공공기관" },
  { org: "강원도 정선군 청소년수련관", desc: "공무원 AI 기초교육 / 생성형 AI 활용능력향상", tag: "공공기관" },
  { org: "강원도청", desc: "공무원 대상 AI 음악 제작 워크숍", tag: "공공기관" },
  // 교육기관
  { org: "홍익대학교", desc: "디자이너를 위한 AI 활용", tag: "교육기관" },
  { org: "대진디자인고등학교 (2025)", desc: "취업역량 강화 및 AI 활용 웹툰 제작", tag: "교육기관" },
  { org: "대진디자인고등학교 (2026)", desc: "실질적 문제해결을 위한 AI 활용 및 디자인 역량 강화", tag: "교육기관" },
];

export function CaseStudiesV2() {
  return (
    <section id="portfolio" className="bg-white px-4 md:px-8 pb-32">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="rounded-[4rem] overflow-hidden bg-black shadow-sm border border-black/5 p-8 md:p-16 lg:p-24 flex flex-col gap-16 lg:gap-24">
          
          <div className="flex flex-col md:flex-row gap-8 justify-between items-end border-b border-white/20 pb-12">
            <h2 className="text-[#FFE87A] text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter leading-[0.8]">
              BEST<br/>PRACTICE
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-bold tracking-wide leading-relaxed break-keep max-w-sm text-balance">
              기업과 대학을 넘어 지자체까지 모두가 극찬한 가장 성공적인 AI 교육 사례. 현업에 즉시 적용 가능한 검증된 트랙 레코드를 한눈에 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-16 lg:gap-y-16">
            {PORTFOLIO_DATA.map((item, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <span className="text-[#FFE87A] font-bold text-xs uppercase tracking-widest">{item.tag}</span>
                  <span className="text-white/20 font-black text-2xl group-hover:text-white/60 transition-colors">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter break-keep text-balance mb-4">
                  {item.org}
                </h4>
                <p className="text-white/60 font-bold text-base md:text-lg leading-snug break-keep text-balance h-full flex items-end">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
