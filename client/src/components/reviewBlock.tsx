import { useState } from "react"
import { IconArrowBarDown } from "@tabler/icons-react";

export default function ReviewBlock({text}: {text:string}){
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    const textStyles = isExpanded
        ? ''
        : 'line-clamp-4';
    return(
        <div className="border border-green rounded-lg p-5 text-green">
            <p className={`${textStyles}`}>{text}</p>
            <button
                onClick={toggleExpansion}
                className="mt-2 mx-auto space-y-1 flex flex-col"
            >
                {isExpanded ? 'Приховати' : 'Читати ще'}
                <IconArrowBarDown size={16} className={`mx-auto ${isExpanded ? 'rotate-180' : '' }`} />
            </button>
        </div>
    )
}