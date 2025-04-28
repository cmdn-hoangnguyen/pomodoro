import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEye,
  faChartLine,
  faHeart,
  faBolt,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { theme } from "@/constants/styles";
import SectionTitle from "./SectionTitle";
import { cn } from "@/utils/cn";

const ValueSection = () => {
  const CustomIcon = ({ icon }: { icon: IconProp }) => {
    return <FontAwesomeIcon icon={icon} color="var(--primary)" size="2xl" />;
  };

  const data = [
    {
      title: "Increased Concentration",
      description:
        "Work in distraction-free 25-minute sprints to boost concentration, achieve flow, and produce higher quality results.",
      icon: <CustomIcon icon={faEye} />,
    },
    {
      title: "Improved Time Management",
      description:
        "Time-boxed intervals help you manage your workload better, reduce context switching, and set realistic goals.",
      icon: <CustomIcon icon={faClock} />,
    },
    {
      title: "Higher Productivity and Output",
      description:
        "Complete more in less time by leveraging short bursts of focused work without burnout or distraction.",
      icon: <CustomIcon icon={faChartLine} />,
    },
    {
      title: "Reduced Burnout and Fatigue",
      description:
        "Built-in breaks align with natural brain rhythms, helping you stay refreshed, energized, and avoid exhaustion.",
      icon: <CustomIcon icon={faHeart} />,
    },
    {
      title: "Procrastination Deterrent",
      description:
        "The 25-minute timer lowers resistance to starting tasks, making it easier to begin and maintain momentum.",
      icon: <CustomIcon icon={faHourglassStart} />,
    },
    {
      title: "Increased Motivation and Progress",
      description:
        "Tracking completed pomodoros gives a satisfying sense of progress that fuels motivation and consistency.",
      icon: <CustomIcon icon={faBolt} />,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle
        heading="Pomodoro"
        highlightHeading="Benefits"
        subTitle="Discover the powerful values of the Pomodoro Technique"
        isHighlightFirst={false}
      />

      <ul className="grid grid-cols-12 xl:min-h-[40rem] gap-6">
        {data.map((value) => {
          return (
            <li
              key={value.title}
              className="2xl:col-span-4 md:col-span-6 col-span-12 xl:h-[20rem] lg:h-[18rem] md:h-[16rem] h-[15rem]"
            >
              <Card
                content={
                  <div className="flex flex-col gap-4 xl:mt-2">
                    <p
                      className={cn(
                        "uppercase font-semibold text-center h-8 flex items-center justify-center",
                        theme.font.baseParagraph
                      )}
                    >
                      {value.title}
                    </p>
                    <p className={cn("text-center", theme.font.baseParagraph)}>
                      {value.description}
                    </p>
                  </div>
                }
                icon={value.icon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ValueSection;
