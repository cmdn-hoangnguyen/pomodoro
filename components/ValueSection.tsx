import Card from "./card/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faChartLine, faHeart, faBolt, faHourglassStart } from '@fortawesome/free-solid-svg-icons';


const ValueSection = () => {
    const data = [
        {
          title: "Increased Focus and Concentration",
          description: "Work in distraction-free 25-minute sprints to boost concentration, achieve flow, and produce higher quality results.",
          icon: <FontAwesomeIcon icon={faEye} />
        },
        {
          title: "Improved Time Management",
          description: "Time-boxed intervals help you manage your workload better, reduce context switching, and set realistic goals.",
          icon: <FontAwesomeIcon icon={faClock} />
        },
        {
          title: "Higher Productivity and Output",
          description: "Complete more in less time by leveraging short bursts of focused work without burnout or distraction.",
          icon: <FontAwesomeIcon icon={faChartLine} />
        },
        {
          title: "Reduced Burnout and Fatigue",
          description: "Built-in breaks align with natural brain rhythms, helping you stay refreshed, energized, and avoid exhaustion.",
          icon: <FontAwesomeIcon icon={faHeart} />
        },
        {
          title: "Procrastination Deterrent",
          description: "The 25-minute timer lowers resistance to starting tasks, making it easier to begin and maintain momentum.",
          icon: <FontAwesomeIcon icon={faHourglassStart} />
        },
        {
          title: "Increased Motivation and Progress",
          description: "Tracking completed pomodoros gives a satisfying sense of progress that fuels motivation and consistency.",
          icon: <FontAwesomeIcon icon={faBolt} />
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
                    {data.map(value => {
                        return (
                            <li key={value.title} className="col-span-4 h-[16rem]">
                                <Card title={value.title} description={value.description} icon={value.icon}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ValueSection