import Image from "next/image";
import MediumPomodoro from "../public/images/pomodoro-medium.webp";
import { SECTION_IDS } from "@/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Circle from "./circle/Circle";

const HeroSection = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-black text-5xl text-center font-bold">
            <span className="text-[var(--primary)]">Pomodoro</span> Technique
          </h1>

          <p className="text-black text-center max-w-xl">
            Boost your productivity with the time-tested Pomodoro Technique.
            Work smarter, not harder, and achieve more in less time.
          </p>
        </div>

        <div className="mt-6">
          <Image
            className="icon--rotate-up-and-down"
            src={MediumPomodoro}
            alt="Pomodoro Technique"
          />
        </div>

        <a className="text-[var(--primary)] font-semibold" href={`#${SECTION_IDS.DESCRIPTION}`}>
          Learn more{" "}
          <span className="inline-block ml-1 icon--up-and-down">
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </a>
      </div>

      <Circle size={20} blur={10} top={0} left={100} right={-10} bottom={100}/>
      <Circle size={20} blur={10} top={100} left={-10} right={100} bottom={0}/>
    </>
  );
};

export default HeroSection;
