import { DESCRIPTION_CONTENT } from "@/utils/constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSX } from "react";
import Card from "./card/Card";
import {
  baseFontSize,
  secondHeadingFontSize,
  subTitleFontSize,
} from "@/utils/commonStyle";

type DescriptionType = {
  title: string;
  content: JSX.Element;
};

const DescriptionSection = () => {
  const descriptionContent: Record<DESCRIPTION_CONTENT, DescriptionType> = {
    [DESCRIPTION_CONTENT.WHAT_IS]: {
      title: "What is Pomodoro?",
      content: (
        <p className={`${baseFontSize}`}>
          The Pomodoro Technique is a time management method that breaks work
          into focused 25-minute intervals called pomodoros, followed by short
          breaks. It's designed to help you stay productive, especially when
          feeling overwhelmed or struggling with time management. This technique
          can improve focus, motivation, and efficiency. The article also
          explores its origin, how to apply it, and both its benefits and
          potential downsides.
        </p>
      ),
    },
    [DESCRIPTION_CONTENT.HISTORY]: {
      title: "History of Pomodoro",
      content: (
        <>
          <p className={`${baseFontSize}`}>
            The Pomodoro Technique was developed in 1987 by Francesco Cirillo
            while he was a university student struggling to focus. He began by
            using a tomato-shaped kitchen timer to stay concentrated for just
            two minutes. After experimenting, he found that working in 25-minute
            intervals with 5-minute breaks provided the most effective rhythm
            for productivity.
          </p>
        </>
      ),
    },
    [DESCRIPTION_CONTENT.HOW_TO]: {
      title: "How to Practice the Pomodoro Technique?",
      content: (() => {
        const RenderTitle = ({ title }: { title: string }) => {
          return (
            <>
              <span className="font-semibold">
                <FontAwesomeIcon
                  icon={faStar}
                  color="var(--primary)"
                  size="xs"
                />{" "}
                {title}:{" "}
              </span>
              <br />
            </>
          );
        };

        return (
          <>
            <p className={`${baseFontSize}`}>
              <RenderTitle title="Use a timer" />
              Set a timer to stay on track with your pomodoros and breaks. You
              can use a kitchen timer, phone app, or browser extension.
            </p>

            <p className={`${baseFontSize}`}>
              <RenderTitle title="Plan your tasks" />
              Break big tasks into smaller chunks and estimate how many
              pomodoros each will take to stay organized and focused.
            </p>

            <p className={`${baseFontSize}`}>
              <RenderTitle title="Make the most of your breaks" />
              Use break time to hydrate, stretch, snack, or relax—this helps
              recharge your energy before the next session.
            </p>

            <p className={`${baseFontSize}`}>
              <RenderTitle title="Customize the intervals" />
              Adjust the length of work and break intervals to fit your style.
              Flexibility is key to making the technique work for you.
            </p>
          </>
        );
      })(),
    },
  };

  const renderDescription = [
    DESCRIPTION_CONTENT.WHAT_IS,
    DESCRIPTION_CONTENT.HISTORY,
    DESCRIPTION_CONTENT.HOW_TO,
  ];

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className={`${secondHeadingFontSize} text-black font-bold`}>
            Pomodoro
            <span className="text-[var(--primary)]"> Description</span>
          </h2>

          <p className={subTitleFontSize}>
            Do you know anything about the pomodoro technique?
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {renderDescription.map((item, index) => {
            return (
              <div key={index} className={`${index === renderDescription.length - 1 ? 'col-span-12' : 'xl:col-span-6 md:col-span-6 col-span-12'}`}>
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

        {/* <Card
          isBorderTop={false}
          content={renderDescription.map((item, index) => {
            return (
              <article key={index}>
                <h3 className="font-semibold mb-1">
                  <span className="inline-block relative w-5 mr-1">
                    <span className="absolute bg-[var(--primary)] left-0 right-0 top-[50%] bottom-[15%] z-0"></span>

                    <span className="relative z-10">{index + 1}.</span>
                  </span>
                  <p className={baseFontSize}>
                    {descriptionContent[item].title}
                  </p>
                </h3>

                <div className="flex flex-col gap-2">
                  {descriptionContent[item].content}
                </div>
              </article>
            );
          })}
        /> */}
      </div>
    </>
  );
};

export default DescriptionSection;
