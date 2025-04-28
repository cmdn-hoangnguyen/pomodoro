import { SCHEDULE_STATUS } from "@/constants/enum";
import { theme } from "@/constants/styles";
import { useRenderSchedule } from "@/hooks/useRenderSchedule";
import { cn } from "@/utils/cn";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ScheduleCardProps = {
  task: SCHEDULE_STATUS;
  index: number;
};

const ScheduleCard = ({ task, index }: ScheduleCardProps) => {
  const { taskClassname } = useRenderSchedule();

  const condition = taskClassname(task);
  const resultCardStyle = "relative flex flex-col items-center rounded-xl";

  return (
    <div className={`${resultCardStyle} ${condition} border`}>
      {index !== 0 && (
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-xs absolute top-[50%] left-[0] translate-y-[-50%] md:translate-x-[-150%] translate-x-[-100%] h-"
        />
      )}

      {task === SCHEDULE_STATUS.WORKING && (
        <span
          className={cn(
            "m-auto text-center wrap sm:w-[90%] w-[50%]",
            theme.font.baseParagraph
          )}
        >
          25m Working
        </span>
      )}

      {task === SCHEDULE_STATUS.LONG_BREAK && (
        <span className={cn("m-auto", theme.font.baseParagraph)}>
          15 - 30min Long Break
        </span>
      )}

      {task === SCHEDULE_STATUS.SHORT_BREAK && (
        <span
          className={cn(
            "text-center m-auto wrap sm:w-[90%] w-[50%]",
            theme.font.baseParagraph
          )}
        >
          5m Break
        </span>
      )}
    </div>
  );
};

export default ScheduleCard;
