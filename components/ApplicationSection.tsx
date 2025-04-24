"use client";

import { useEffect, useState } from "react";
import Card from "./card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { SCHEDULE_STATUS } from "@/utils/constants";

const ApplicationSection = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [schedule, setSchedule] = useState<SCHEDULE_STATUS[]>([]);
  const [result, setResult] = useState<{ [key: string]: number }>({
    totalShortBreak: 0,
    totalLongBreak: 0,
    totalPomodoroCycle: 0,
    totalWorkingTime: 0,
  });

  const handleGenerate = () => {
    if (inputValue <= 0) return setIsGenerated(false);
    setSchedule([]);

    const workingTime = inputValue * 25;
    const longBreak = workingTime >= 100 ? Math.floor(workingTime / 100) : 0;

    setResult({
      totalShortBreak: inputValue,
      totalLongBreak: longBreak,
      totalPomodoroCycle: inputValue,
      totalWorkingTime: workingTime,
    });

    setIsGenerated(true);
    generateSchedule();
  };

  useEffect(() => {
    setIsGenerated(false);
  }, []);

  const GenerateResult = ({
    result,
    text,
  }: {
    result: string;
    text: string;
  }) => {
    return (
      <div className="col-span-3 flex flex-col items-center">
        <span className="h-10 text-3xl text-[var(--primary)] font-bold">
          {result}
        </span>
        <p className=" text-center">{text}</p>
      </div>
    );
  };

  const resultArray = [
    {
      result: result.totalPomodoroCycle.toString(),
      text: "Pomodoro cycles",
    },
    {
      result: `${result.totalWorkingTime} mins`,
      text: "Total working time",
    },
    {
      result: `${result.totalShortBreak * 5} mins`,
      text: `${result.totalShortBreak} short break`,
    },
    {
      result:
        result.totalLongBreak === 0
          ? "0 mins"
          : `${result.totalLongBreak * 15} - ${
              result.totalLongBreak * 30
            } mins`,
      text: `${result.totalLongBreak} long break`,
    },
  ];

  const ScheduleCard = ({
    task,
    index,
  }: {
    task: SCHEDULE_STATUS;
    index: number;
  }) => {
    if (inputValue < 4 && task === SCHEDULE_STATUS.LONG_BREAK) return;
    const resultCardStyle = "relative flex flex-col items-center";

    let condition;
    switch (task) {
      case SCHEDULE_STATUS.WORKING:
        condition =
          "w-30 h-14 bg-[var(--secondary)] border-[var(--primary)] rounded-xl";
        break;
      case SCHEDULE_STATUS.SHORT_BREAK:
        condition =
          "w-30 h-14 bg-[var(--blue-secondary)] border-[var(--blue)] rounded-xl";
        break;
      case SCHEDULE_STATUS.LONG_BREAK:
        condition =
          "w-48 h-14 bg-[var(--info-secondary)] border-[var(--info)] rounded-xl";
        break;

      default:
    }

    return (
      <div className={`${resultCardStyle} ${condition} border`}>
        {index !== 0 && (
          <FontAwesomeIcon
            icon={faArrowRight}
            className="absolute top-[50%] left-[0] translate-y-[-50%] translate-x-[-150%] h-"
          />
        )}

        {task === SCHEDULE_STATUS.WORKING && (
          <span className="m-auto text-center">25 mins Working</span>
        )}

        {task === SCHEDULE_STATUS.LONG_BREAK && (
          <span className="m-auto">Long Break</span>
        )}

        {task === SCHEDULE_STATUS.SHORT_BREAK && (
          <span className="m-auto">5 mins Break</span>
        )}
      </div>
    );
  };

  const generateSchedule = () => {
    let count = inputValue;
    if (count > 4) {
      count = 4;
    }

    for (let i = 0; i < count; i++) {
      setSchedule((prev) => [...prev, SCHEDULE_STATUS.WORKING]);

      if ((i + 1) % 4 === 0) {
        setSchedule((prev) => [...prev, SCHEDULE_STATUS.LONG_BREAK]);
      } else {
        setSchedule((prev) => [...prev, SCHEDULE_STATUS.SHORT_BREAK]);
      }
    }

    return schedule;
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-black text-3xl font-bold">
            <span className="text-[var(--primary)]">Try </span>
            It Yourself
          </h2>

          <p>
            Generate a personalized Pomodoro schedule by entering your preferred
            work session length.
          </p>
        </div>

        <Card
          isBorderTop={false}
          content={
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-12 gap-6 items-end w-full">
                <div className="col-span-8 flex flex-col">
                  <label htmlFor="schedule">
                    Working Time (Number x 25 minutes):
                  </label>
                  <input
                    id="schedule"
                    className="border px-4 h-12 rounded-lg focus:outline-[var(--primary)]"
                    name="schedule"
                    type="number"
                    value={inputValue}
                    onChange={(e) => {
                      e.preventDefault();
                      setInputValue(Number(e.target.value));
                    }}
                  />
                </div>

                <button
                  type="button"
                  className="col-span-4 bg-[var(--primary)] px-4 h-12 text-white rounded-lg cursor-pointer"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <p className="capitalize font-semibold text-2xl text-center">
                  your pomodoro result
                </p>

                <div
                  className="transition-all duration-300"
                  style={{
                    maxHeight: isGenerated ? "50vh" : "fit-content",
                    overflow: "hidden",
                  }}
                >
                  {isGenerated && (
                    <>
                      <div className="flex flex-col gap-12 border-2 border-[var(--primary)] rounded-2xl p-10">
                        <div className="grid grid-cols-12">
                          {resultArray.map((item, index) => (
                            <GenerateResult
                              key={index}
                              text={item.text}
                              result={item.result}
                            />
                          ))}
                        </div>

                        <div className="flex flex-col gap-6">
                          <div className="flex flex-col">
                            <p className="text-center font-semibold capitalize">
                              Review your schedule:
                            </p>
                            <p className="text-center text-[var(--info)]">
                              <FontAwesomeIcon
                                icon={faClock}
                                className="mr-2"
                              />
                              After finishing the schedule below, your cycle
                              will begin again.
                            </p>
                          </div>

                          <div className="flex justify-center flex-wrap gap-6">
                            {schedule.map((item, index) => {
                              return <ScheduleCard task={item} index={index} />;
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {!isGenerated && (
                    <p className="text-center">Try generate something!</p>
                  )}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default ApplicationSection;
