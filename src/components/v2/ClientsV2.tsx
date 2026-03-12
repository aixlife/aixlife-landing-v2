import { FadeIn } from "@/components/ui/fade-in";

const clients = [
  "카카오", "엘리스그룹", "서울경제진흥원", "국민건강보험공단", "부산정보산업진흥원",
  "강원도청", "천지세무법인", "닥터서클", "수출입 아카데미", "The4", "홍익대학교", "대진디자인고등학교", "메이크패밀리"
];

export function ClientsV2() {
  return (
    <section className="bg-white px-4 md:px-8 pb-32 overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto border-t border-black/10 pt-32 w-full">
        <FadeIn>
          <div className="text-center mb-16">
            <h3 className="text-xs md:text-sm font-black tracking-widest text-black/40 uppercase mb-4">Trusted By</h3>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black break-keep text-balance">
              함께 혁신을 만들어가는<br/>파트너스
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-full mx-auto">
            {/* ROW 1 */}
            <div className="flex justify-center gap-2 md:gap-3 w-max mx-auto px-4">
              {clients.slice(0, 7).map((client, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 md:px-6 md:py-4 rounded-full border border-black/10 bg-white text-black/80 font-black text-sm md:text-lg tracking-tighter hover:bg-black hover:text-[#FFE87A] hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl cursor-default whitespace-nowrap"
                >
                  {client}
                </div>
              ))}
            </div>
            {/* ROW 2 */}
            <div className="flex justify-center gap-2 md:gap-3 w-max mx-auto px-4 mt-2">
              {clients.slice(7).map((client, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 md:px-6 md:py-4 rounded-full border border-black/10 bg-white text-black/80 font-black text-sm md:text-lg tracking-tighter hover:bg-black hover:text-[#FFE87A] hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl cursor-default whitespace-nowrap"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
