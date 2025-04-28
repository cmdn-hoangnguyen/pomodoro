type BlurBackgroundItemProp = {
  size: number;
  top: number;
  left: number;
  bottom: number;
  right: number;
  blur?: number;
  className?: string;
};

const BlurBackgroundItem = ({
  size,
  top,
  left,
  bottom,
  right,
  blur = 0,
  className = "",
}: BlurBackgroundItemProp) => {
  return (
    <div
      className={`absolute max-sm:scale-[25%] rounded-full bg-[var(--primary)] ${className}`}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        top: `${top}%`,
        left: `${left}%`,
        bottom: `${bottom}%`,
        right: `${right}%`,
        filter: `blur(${blur}rem)`,
      }}
    ></div>
  );
};

export default BlurBackgroundItem;
