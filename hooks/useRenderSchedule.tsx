import { SCHEDULE_STATUS } from "@/constants/enum";
import { ResultType } from "@/constants/type";

export const useRenderSchedule = () => {
  // SCHEDULE RESULT
  const handleGenerateSchedule = (inputValue: number): ResultType[] => {
    const workingTime = inputValue * 25;
    const longBreak = workingTime >= 100 ? Math.floor(workingTime / 100) : 0;

    const result = {
      totalShortBreak: inputValue,
      totalLongBreak: longBreak,
      totalPomodoroCycle: inputValue,
      totalWorkingTime: workingTime,
    };

    const scheduleArray = [
      {
        result: `${result.totalWorkingTime} mins`,
        text: "Total working time",
      },
      {
        result: `${result.totalPomodoroCycle} Pomo`,
        text: "Pomodoro cycles",
      },
      {
        result: `${result.totalShortBreak * 5} mins`,
        text: `${result.totalShortBreak} short break`,
      },
      {
        result:
          result.totalLongBreak === 0
            ? "0 mins"
            : `${result.totalLongBreak * 15} mins`,
        text: `${result.totalLongBreak} long break`,
      },
    ];

    return scheduleArray;
  };

  // WORK - BREAK CLASSNAME
  const taskClassname = (task: SCHEDULE_STATUS) => {
    let condition;
    switch (task) {
      case SCHEDULE_STATUS.WORKING:
        condition = "w-30 h-14 bg-[var(--secondary)] border-[var(--primary)]";
        break;
      case SCHEDULE_STATUS.SHORT_BREAK:
        condition = "w-30 h-14 bg-[var(--blue-secondary)] border-[var(--blue)]";
        break;
      case SCHEDULE_STATUS.LONG_BREAK:
        condition = "w-48 h-14 bg-[var(--info-secondary)] border-[var(--info)]";
        break;

      default:
    }

    return condition;
  };

  // WORK - BREAK STATUS
  const taskArray = (inputValue: number) => {
    let count = inputValue;
    if (count > 4) {
      count = 4;
    }

    let result: SCHEDULE_STATUS[] = [];
    for (let i = 0; i < count; i++) {
      result = [...result, SCHEDULE_STATUS.WORKING];

      if ((i + 1) % 4 === 0) {
        result = [...result, SCHEDULE_STATUS.LONG_BREAK];
      } else {
        result = [...result, SCHEDULE_STATUS.SHORT_BREAK];
      }
    }

    return result;
  };

  return {
    handleGenerateSchedule,
    taskClassname,
    taskArray,
  };
};
