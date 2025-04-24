import ApplicationSection from "@/components/ApplicationSection";
import DescriptionSection from "@/components/DescriptionSection";
import HeroSection from "@/components/HeroSection";
import QuotationSection from "@/components/QuotationSection";
import ValueSection from "@/components/ValueSection";
import { SECTION_IDS } from "@/utils/constants";
import { ReactNode } from "react";

type SectionType = {
  data: ReactNode;
};

export default function Home() {
  const sections: Record<SECTION_IDS, SectionType> = {
    [SECTION_IDS.HERO]: {
      data: <HeroSection />,
    },
    [SECTION_IDS.DESCRIPTION]: {
      data: <DescriptionSection />,
    },
    [SECTION_IDS.VALUE]: {
      data: <ValueSection />,
    },
    [SECTION_IDS.APPLICATION]: {
      data: <ApplicationSection />,
    },
    [SECTION_IDS.QUOTATION]: {
      data: <QuotationSection /> ,
    },
  };

  const renderSections = [
    SECTION_IDS.HERO,
    SECTION_IDS.DESCRIPTION,
    SECTION_IDS.VALUE,
    SECTION_IDS.APPLICATION,
    SECTION_IDS.QUOTATION,
  ];

  return (
    <>
      <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        {renderSections.map((item, index) => {
          return (
            <section key={item} id={item} className="bg-[var(--muted)]">
              <div
                className={`2xl:w-[60%] xl:w-[70%] md:w-[80%] w-[90%] mx-auto relative ${
                  index === 0 ? "" : "xl:p-14 px-4 py-8"
                }`}
              >
                {sections[item].data}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="bg-[var(--accent)]">footer</footer>
    </>
  );
}
