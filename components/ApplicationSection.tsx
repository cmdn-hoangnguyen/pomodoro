"use client";

import { useEffect, useState } from "react";
import Card from "./card/Card";

const ApplicationSection = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [result, setResult] = useState<{ [key: string]: number }>({
    totalShortBreak: 0,
    totalLongBreak: 0,
    totalPomodoroCycle: 0,
    totalWorkingTime: 0,
  });

  const handleGenerate = () => {
    if (inputValue === 0) return;

    const workingTime = inputValue * 25;
    const longBreak = workingTime >= 100 ? Math.floor(workingTime / 100) : 0;

    setResult({
      totalShortBreak: inputValue - 1,
      totalLongBreak: longBreak,
      totalPomodoroCycle: inputValue,
      totalWorkingTime: workingTime,
    });

    setIsGenerated(true);
  };

  useEffect(() => {
    setIsGenerated(false);
  }, []);

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
            <>
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

              <div className="flex flex-col gap-6">
                <p className="capitalize">your pomodoro result</p>

                <div
                  className="transition-all duration-300"
                  style={{
                    maxHeight: isGenerated ? "50vh" : "0",
                    opacity: isGenerated ? "1" : "0",
                    overflow: "hidden"
                  }}
                >
                  {isGenerated && "test"}
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default ApplicationSection;
