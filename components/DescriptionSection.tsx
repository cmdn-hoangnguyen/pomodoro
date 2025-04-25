import Card from "./Card";
import { baseFontSize } from "@/utils/commonStyle";
import { DESCRIPTION_CONTENT } from "@/constants/enum";
import { useRenderDescription } from "@/hooks/useRenderHowto";
import SectionTitle from "./SectionTitle";

const DescriptionSection = () => {
  const descriptionContent = useRenderDescription();

  const renderDescription = [
    DESCRIPTION_CONTENT.WHAT_IS,
    DESCRIPTION_CONTENT.HISTORY,
    DESCRIPTION_CONTENT.HOW_TO,
  ];

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle
        heading="Pomodoro"
        highlightHeading="Description"
        subTitle="Do you know anything about the pomodoro technique?"
        isHighlightFirst={false}
      />

      <div className="grid grid-cols-12 gap-6">
        {renderDescription.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                index === renderDescription.length - 1
                  ? "col-span-12"
                  : "xl:col-span-6 md:col-span-6 col-span-12"
              }`}
            >
              <Card
                isBorderTop={false}
                content={
                  <article>
                    <h3 className="font-semibold mb-1">
                      <span className="inline-block relative w-5 mr-1">
                        <span className="absolute bg-[var(--primary)] left-0 right-0 top-[50%] bottom-[15%] z-0"></span>

                        <span className="relative z-10">{index + 1}.</span>
                      </span>

                      <span className={baseFontSize}>
                        {descriptionContent[item].title}
                      </span>
                    </h3>

                    <div className="flex flex-col gap-2">
                      {descriptionContent[item].content}
                    </div>
                  </article>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DescriptionSection;
