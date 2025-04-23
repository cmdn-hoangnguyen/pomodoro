import { JSX } from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
  isBorderTop?: boolean;
};

const Card = ({ title, description, icon, isBorderTop = true }: CardProps) => {
  return (
    <>
      <div
        className={`w-full h-full px-6 py-4 flex flex-col items-center gap-4 bg-white rounded-2xl shadow
                ${
                  isBorderTop ? "border-t-4 border-[var(--primary)]" : ""
                }              
            `}
      >
        {icon && (
          <span className="w-18 h-18 flex justify-center items-center border-4 border-[var(--primary)] rounded-full">
            {icon}
          </span>
        )}
        <h4 className="uppercase font-semibold">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
    </>
  );
};

export default Card;
