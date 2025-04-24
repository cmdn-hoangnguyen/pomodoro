"use client";

import { useEffect, useState } from "react";
import Card from "./card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { SCHEDULE_STATUS } from "@/utils/constants";
import {
  baseFontSize,
  secondHeadingFontSize,
  subTitleFontSize,
} from "@/utils/commonStyle";

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
      <div className="xl:col-span-3 sm:col-span-6 col-span-12 flex flex-col items-center">
        <span className="h-10 text-3xl text-[var(--primary)] font-bold">
          {result}
        </span>
        <p className=" text-center">{text}</p>
      </div>
    );
  };

  const resultArray = [
    {
      result: `${result.totalWorkingTime} mins`,
      text: "Total working time",
    },
    {
      result: `${result.totalPomodoroCycle} Pomodoro`,
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
            className="md:text-xs absolute top-[50%] left-[0] translate-y-[-50%] md:translate-x-[-150%] translate-x-[-110%] h-"
          />
        )}

        {task === SCHEDULE_STATUS.WORKING && (
          <span className={`${baseFontSize} m-auto text-center wrap sm:w-[90%] w-[50%]`}>
            25m Working
          </span>
        )}

        {task === SCHEDULE_STATUS.LONG_BREAK && (
          <span className={`${baseFontSize} m-auto`}>Long Break</span>
        )}

        {task === SCHEDULE_STATUS.SHORT_BREAK && (
          <span className={`${baseFontSize} text-center m-auto wrap sm:w-[90%] w-[50%]`}>5m Break</span>
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
          <h2 className={`${secondHeadingFontSize} text-black font-bold`}>
            <span className="text-[var(--primary)]">Try </span>
            It Yourself
          </h2>

          <p className={subTitleFontSize}>
            Generate a personalized Pomodoro schedule by entering your preferred
            work session length.
          </p>
        </div>

        <Card
          isBorderTop={false}
          content={
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-12 lg:gap-6 gap-2 items-end w-full">
                <div className="md:col-span-8 col-span-12 flex flex-col">
                  <label htmlFor="schedule">
                    Working (Number x 25 minutes):
                  </label>
                  <input
                    id="schedule"
                    className="border border-[var(--secondary)] px-4 h-12 rounded-lg focus:outline-[var(--primary)]"
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
                  className="md:col-span-4 col-span-12 bg-[var(--primary)] px-4 h-12 text-white rounded-lg cursor-pointer"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <p className={`${subTitleFontSize} capitalize`}>
                  your pomodoro result
                </p>

                <div
                  className="transition-all duration-300"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  {isGenerated ? (
                    <>
                      <div className="flex flex-col gap-12 border-2 border-[var(--primary)] rounded-2xl p-8">
                        <div className="grid grid-cols-12 md:gap-6 gap-2">
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
                            <p className={`${subTitleFontSize} capitalize`}>
                              Review your schedule:
                            </p>
                            <p
                              className={`${baseFontSize} text-center text-[var(--info)]`}
                            >
                              <FontAwesomeIcon
                                icon={faClock}
                                className="mr-2"
                              />
                              After finishing the schedule below, your cycle
                              will begin again.
                            </p>
                          </div>

                          <div className="flex justify-center flex-wrap md:gap-6 gap-4">
                            {schedule.map((item, index) => {
                              return (
                                <ScheduleCard
                                  key={index}
                                  task={item}
                                  index={index}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className={`${baseFontSize} text-center`}>
                      Try generate something!
                    </p>
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
