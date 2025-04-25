import { secondHeadingFontSize, subTitleFontSize } from "@/utils/commonStyle";

type SectionTitleProps = {
  heading: string;
  highlightHeading: string;
  subTitle: string;
  isHighlightFirst: boolean;
};

const SectionTitle = ({
  heading,
  highlightHeading,
  subTitle,
  isHighlightFirst,
}: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className={`${secondHeadingFontSize} text-black font-bold`}>
        {isHighlightFirst && (
          <span className="text-[var(--primary)]">{highlightHeading} </span>
        )}

        {heading}

        {!isHighlightFirst && (
          <span className="text-[var(--primary)]"> {highlightHeading}</span>
        )}
      </h2>

      <p className={subTitleFontSize}>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
