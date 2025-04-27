import Image from "next/image";
import MediumPomodoro from "../public/images/pomodoro-medium.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Circle from "./BlurBackgroundItem";
import { SECTION_IDS } from "@/constants/enum";
import { theme } from "@/constants/styles";

const HeroSection = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className={theme.font.firstHeading}>
            <span className="text-[var(--primary)]">Pomodoro</span> Technique
          </h1>

          <p className={`${theme.font.subTitle} max-w-xl`}>
            Boost your productivity with the time-tested Pomodoro Technique.
            Work smarter, not harder, and achieve more in less time.
          </p>
        </div>

        <div className="mt-6">
          <Image
            className="animate-rotateUpAndDown"
            src={MediumPomodoro}
            alt="Pomodoro Technique"
          />
        </div>

        <a
          className="text-[var(--primary)] font-semibold"
          href={`#${SECTION_IDS.DESCRIPTION}`}
        >
          Learn more{" "}
          <span className="inline-block ml-1 animate-upAndDown">
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </a>
      </div>

      <Circle size={30} blur={20} top={80} left={-20} right={100} bottom={0} />
    </>
  );
};

export default HeroSection;
