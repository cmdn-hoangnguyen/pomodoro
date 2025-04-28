"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { SCHEDULE_STATUS } from "@/constants/enum";
import SectionTitle from "./SectionTitle";
import { useRenderSchedule } from "@/hooks/useRenderSchedule";
import { ResultType } from "@/constants/type";
import ScheduleCard from "./ScheduleCard";
import ScheduleResult from "./ScheduleResult";
import { theme } from "@/constants/styles";
import { cn } from "@/utils/cn";
import PrimaryButton from "./PrimaryButton";

const ApplicationSection = () => {
  const [inputValue, setInputValue] = useState<string>("1");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [schedule, setSchedule] = useState<SCHEDULE_STATUS[]>([]);
  const [scheduleResult, setScheduleResult] = useState<ResultType[]>([]);

  const { handleGenerateSchedule, taskArray } = useRenderSchedule();

  const handleGenerate = () => {
    const num = Number(inputValue);

    if (!num || num <= 0) return setIsGenerated(false);
    setSchedule([]);

    // get schedule result
    setScheduleResult(handleGenerateSchedule(num));
    setIsGenerated(true);

    // get task array
    setSchedule(taskArray(num));
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.value === "") {
      setInputValue("");
      return;
    }

    if (!isNaN(Number(e.target.value)) && Number(e.target.value) >= 0) {
      setInputValue(e.target.value);
    }
  };

  useEffect(() => {
    setIsGenerated(false);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle
        heading="It Yourself"
        highlightHeading="Try"
        subTitle="Generate a personalized Pomodoro schedule by entering your preferred work session length."
        isHighlightFirst={true}
      />

      <Card
        isBorderTop={false}
        content={
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-12 lg:gap-6 gap-2 items-end w-full">
              <div className="md:col-span-8 col-span-12 flex flex-col">
                <label htmlFor="schedule">Working (Number x 25 minutes):</label>
                <input
                  id="schedule"
                  className="border border-[var(--secondary)] px-4 h-12 rounded-lg focus:outline-[var(--primary)]"
                  name="schedule"
                  type="number"
                  value={inputValue}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
              </div>

              <PrimaryButton
                text="Generate"
                onClick={handleGenerate}
                disabled={inputValue === "" || inputValue === "0"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p
                className={cn(
                  "font-semibold capitalize",
                  theme.font.baseParagraph
                )}
              >
                your pomodoro result
              </p>

              <div className="transition-all duration-300 overflow-hidden">
                {isGenerated ? (
                  <div className="flex flex-col gap-12 border-2 border-[var(--primary)] rounded-2xl p-8">
                    <div className="grid grid-cols-12 md:gap-6 gap-2">
                      {scheduleResult.map((item, index) => (
                        <ScheduleResult
                          key={index}
                          text={item.text}
                          result={item.result}
                        />
                      ))}
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col">
                        <p className={cn("capitalize", theme.font.subTitle)}>
                          Review your schedule:
                        </p>
                        <p
                          className={cn(
                            "text-center text-[var(--info)]",
                            theme.font.baseParagraph
                          )}
                        >
                          <FontAwesomeIcon icon={faClock} className="mr-2" />
                          After finishing the schedule below, your cycle will
                          begin again.
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
                ) : (
                  <p className={cn("text-center", theme.font.baseParagraph)}>
                    Try generate something!
                  </p>
                )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ApplicationSection;
