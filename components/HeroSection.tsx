import Image from "next/image";
import LargePomodoro from "../public/images/pomodoro-large.webp"

const HeroSection = () => {
    return (
      <>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6 flex flex-col gap-6">
            <h1 className="text-black text-6xl font-bold">
              <span className="text-[var(--primary)]">Pomodoro</span> Technique
            </h1>

            <p className="text-black max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia, magna faucibus viverra congue, urna erat sagittis tortor,
              in accumsan augue metus in lectus. Vestibulum ut convallis diam.
              Curabitur et.
            </p>
          </div>

          <div className="col-span-6">
            <Image src={LargePomodoro} alt="Pomodoro Technique" />
          </div>
        </div>
      </>
    );
}

export default HeroSection