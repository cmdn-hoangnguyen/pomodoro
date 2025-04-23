import { JSX } from "react"

type CardProps = {
    title: string,
    description: string,
    icon?: JSX.Element,
    isBorderTop?: boolean
}

const Card = ({ title, description, icon, isBorderTop = true }: CardProps) => {
    return (
        <>
            <div className={`w-full h-full px-6 py-4 flex flex-col items-center gap-4 bg-white rounded-2xl shadow
                ${isBorderTop ? "border-t-4 border-[var(--primary)]" : ""}              
            `}>
                {icon && (
                    <span className="w-18 h-18 flex justify-center items-center border-4 border-[var(--primary)] rounded-full">
                        <span className="text-[var(--primary)] text-4xl">{icon}</span>
                    </span>
                )}
                <h3 className="uppercase font-semibold">{title}</h3>
                <p className="text-center">{description}</p>
            </div>
        </>
    )
}

export default Card