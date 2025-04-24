"use client";

import ApplicationSection from "@/components/ApplicationSection";
import DescriptionSection from "@/components/DescriptionSection";
import HeroSection from "@/components/HeroSection";
import LoadingFullPage from "@/components/loading/LoadingFullpage";
import QuotationSection from "@/components/QuotationSection";
import ValueSection from "@/components/ValueSection";
import { SECTION_IDS } from "@/utils/constants";
import { ReactNode, useEffect, useState } from "react";

type SectionType = {
  data: ReactNode;
};

export default function Home() {
  const [count, setCount] = useState<number>(0);

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
      data: <QuotationSection />,
    },
  };

  const renderSections = [
    SECTION_IDS.HERO,
    SECTION_IDS.DESCRIPTION,
    SECTION_IDS.VALUE,
    SECTION_IDS.APPLICATION,
    SECTION_IDS.QUOTATION,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 1) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        if (prev >= 2.2) {
          clearInterval(interval);
          return prev;
        }
        return prev + 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {count < 2.2 && <LoadingFullPage />}
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

      <footer className="bg-[var(--accent)] text-white py-4 text-center text-sm">
        © 2025 Hoang from Classmethod. All rights reserved.
      </footer>
    </>
  );
}
