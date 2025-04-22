const ValueSection = () => {
    const data = [
        { title: "Focus", description: "Enhance your ability to focus deeply." },
        { title: "Focus2", description: "Enhance your ability to focus deeply." },
    ]

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-black text-3xl font-bold">
                        Pomodoro
                        <span className="text-[var(--primary)]"> Benefits</span>
                    </h2>

                    <p>Discover the powerful values of the Pomodoro Technique</p>
                </div>

                <ul className="grid grid-cols-12 gap-6">
                    {data.map(value => {
                        return (
                            <li key={value.title}>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ValueSection