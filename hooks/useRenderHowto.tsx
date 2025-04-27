import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSX } from "react";
import { DESCRIPTION_CONTENT } from "@/constants/enum";
import { practice } from "@/constants/data";
import { theme } from "@/constants/styles";

export const useRenderDescription = (): Record<
  DESCRIPTION_CONTENT,
  { title: string; content: JSX.Element }
> => {
  const renderHowTo = () => (
    <>
      {practice.map((item, index) => (
        <p key={index} className={theme.font.baseParagraph}>
          <span className="font-semibold flex items-center gap-1 leading-5">
            <FontAwesomeIcon icon={faStar} color="var(--primary)" size="xs" />
            {item.title}:
          </span>
          {item.content}
        </p>
      ))}
    </>
  );

  return {
    [DESCRIPTION_CONTENT.WHAT_IS]: {
      title: "What is Pomodoro?",
      content: (
        <p className={theme.font.baseParagraph}>
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
        <p className={theme.font.baseParagraph}>
          The Pomodoro Technique was developed in 1987 by Francesco Cirillo
          while he was a university student struggling to focus. He began by
          using a tomato-shaped kitchen timer to stay concentrated for just two
          minutes. After experimenting, he found that working in 25-minute
          intervals with 5-minute breaks provided the most effective rhythm for
          productivity.
        </p>
      ),
    },
    [DESCRIPTION_CONTENT.HOW_TO]: {
      title: "How to Practice the Pomodoro Technique?",
      content: renderHowTo(),
    },
  };
};
