import { HeaderV2 } from "@/components/v2/HeaderV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { ExpansionV2 } from "@/components/v2/ExpansionV2";
import { SuccessV2 } from "@/components/v2/SuccessV2";
import { CaseStudiesV2 } from "@/components/v2/CaseStudiesV2";
import { ClientsV2 } from "@/components/v2/ClientsV2";
import { ContactV2 } from "@/components/v2/ContactV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function HomeV2() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFE87A] selection:text-black scroll-smooth">
      <CustomCursor />
      <HeaderV2 />
      <main>
        <HeroV2 />
        <ExpansionV2 />
        <SuccessV2 />
        <CaseStudiesV2 />
        <ClientsV2 />
        <ContactV2 />
      </main>
      <FooterV2 />
    </div>
  );
}
