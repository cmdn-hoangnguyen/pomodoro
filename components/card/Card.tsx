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
        className={`w-full h-full xl:p-6 p-4 flex flex-col gap-4 bg-white rounded-2xl shadow hover:shadow-xl transition-all
                ${
                  isBorderTop ? "border-t-4 border-[var(--primary)]" : ""
                }              
            `}
      >
        {icon && (
          <p className="xl:h-18 lg:h-16 h-14">
            <span className="xl:w-18 lg:w-16 w-14 xl:h-18 lg:h-16 h-14 m-auto flex justify-center items-center bg-[var(--secondary)] rounded-full">
              {icon}
            </span>
          </p>
        )}

        {content}
      </div>
    </>
  );
};

export default Card;
