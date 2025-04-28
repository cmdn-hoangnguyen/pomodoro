import { ButtonType } from "@/constants/type";
import { cn } from "@/utils/cn";

const PrimaryButton = ({
  text,
  className = "",
  disabled = false,
  onClick,
}: ButtonType) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={cn(
        "md:col-span-4 col-span-12 px-4 h-12 rounded-lg cursor-pointer",
        disabled
          ? "bg-[var(--disable)] text-black"
          : "bg-[var(--primary)] text-white",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
