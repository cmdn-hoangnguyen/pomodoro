import { ResultType } from "@/constants/type";

const ScheduleResult = ({ result, text }: ResultType) => {
  return (
    <div className="xl:col-span-3 sm:col-span-6 col-span-12 flex flex-col items-center">
      <span className="min-h-10 text-center text-3xl text-[var(--primary)] font-bold">
        {result}
      </span>
      <p className=" text-center">{text}</p>
    </div>
  );
};

export default ScheduleResult;
