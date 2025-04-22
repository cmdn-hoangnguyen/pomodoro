import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import { SECTION_IDS } from "@/utils/constants";
import { ReactNode } from "react";

type SectionType = {
  className: string,
  data: ReactNode
}

export default function Home() {
  const sections: Record<SECTION_IDS, SectionType> = {
    [SECTION_IDS.HERO]: {
      className: "bg-[var(--secondary)]",
      data: <HeroSection />
    },
    [SECTION_IDS.VALUE]: {
      className: "bg-[var(--muted)]",
      data: <ValueSection />
    },
    [SECTION_IDS.APPLICATION]: {
      className: "bg-[var(--secondary)]",
      data: <></>
    },
    [SECTION_IDS.QUOTATION]: {
      className: "bg-[var(--muted)]",
      data: <></>
    }
  }

  const renderSections = [
    SECTION_IDS.HERO, SECTION_IDS.VALUE, SECTION_IDS.APPLICATION, SECTION_IDS.QUOTATION,
  ]

  return (
    <>
      <header></header>

      <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        {renderSections.map((item) => {
          return (
            <section key={item} id={item} className={sections[item].className}>
              <div className="max-w-[70%] mx-auto py-10">
                {sections[item].data}
              </div>
            </section>
          )
        })}
      </main>

      <footer className="bg-[var(--accent)]">footer</footer>
    </>
  );
}
