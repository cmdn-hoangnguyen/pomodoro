const HeroSection = () => {
    return (
        <>
            <div className="grid grid-cols-12 items-center">
                <article className="col-span-6 flex flex-col gap-6">
                    <h1 className="text-black text-6xl font-bold">
                        <span className="text-[var(--primary)]">Pomodoro</span> Technique
                    </h1>

                    <p className="text-black max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, magna faucibus viverra congue, urna erat sagittis tortor, in accumsan augue metus in lectus. Vestibulum ut convallis diam. Curabitur et.
                    </p>
                </article>

                <picture className="col-span-6">
                    <img src="/images/pomodoro-large.webp" alt="Pomodoro Technique" />
                </picture>
            </div>
        </>
    )
}

export default HeroSection