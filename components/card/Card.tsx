import { JSX, ReactNode } from "react";

type CardProps = {
  content: ReactNode;
  icon?: JSX.Element;
  isBorderTop?: boolean;
};

const Card = ({ content, icon, isBorderTop = true }: CardProps) => {
  return (
    <>
      <div
        className={`w-full h-full p-6 flex flex-col gap-4 bg-white rounded-2xl shadow
                ${
                  isBorderTop ? "border-t-4 border-[var(--primary)]" : ""
                }              
            `}
      >
        {icon && (
          <span className="w-18 h-18 m-auto flex justify-center items-center border-4 border-[var(--primary)] rounded-full">
            {icon}
          </span>
        )}

        {content}
      </div>
    </>
  );
};

export default Card;
