import Card from "./card/Card";
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

const ValueSection = () => {
  const CustomIcon = ({ icon }: { icon: IconProp }) => {
    return <FontAwesomeIcon icon={icon} color="var(--primary)" size="2xl" />;
  };

  const data = [
    {
      title: "Increased Focus and Concentration",
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
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-black text-3xl font-bold">
            Pomodoro
            <span className="text-[var(--primary)]"> Benefits</span>
          </h2>

          <p>Discover the powerful values of the Pomodoro Technique</p>
        </div>

        <ul className="grid grid-cols-12 gap-6">
          {data.map((value) => {
            return (
              <li key={value.title} className="col-span-4 h-[16rem]">
                <Card
                  content={
                    <>
                      <h4 className="uppercase font-semibold text-center">{value.title}</h4>
                      <p className="text-center">{value.description}</p>
                    </>
                  }
                  icon={value.icon}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ValueSection;
