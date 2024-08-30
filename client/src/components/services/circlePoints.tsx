import { Text } from "../../types";

interface ICircleProps {
    tags: Text[] | null
}


export default function CirclePoints({tags}: ICircleProps) {
    if(!tags) return null
    console.log(tags)
    return (
        <div>
            <svg version="1.1" viewBox="0 0 369.01 414.69" className="h-[50vh]">
                <g>
                    <path className="fill-none stroke-yellow stroke-1" d="M106.8,204.96c0,92.56-74.43,167.43-166.03,167.43s-166.03-74.87-166.03-167.43S-150.83,37.53-59.23,37.53,106.8,112.4,106.8,204.96Z" />
                    <g>
                        <circle className="fill-yellow" cx="30.24" cy="62.35" r="4.89" />
                        <text className="font-helvetica text-xs font-light fill-yellow" transform="translate(58.26 67.24)">{tags[0].text}</text>
                    </g>
                    <g>
                        <circle className="fill-yellow" cx="84.78" cy="120.81" r="4.89" />
                        <text className="font-helvetica text-xs font-light fill-yellow" transform="translate(112.8 125.7)">{tags[1].text}</text>
                    </g>
                    <g>
                        <circle className="fill-yellow" cx="106.67" cy="195.12" r="4.89" />
                        <text className="font-helvetica text-xs font-light fill-yellow" transform="translate(134.69 200.01)">{tags[2].text}</text>
                    </g>
                    <g>
                        <circle className="fill-yellow" cx="89.67" cy="281.76" r="4.89" />
                        <text className="font-helvetica text-xs font-light fill-yellow" transform="translate(117.69 286.65)">{tags[3].text}</text>
                    </g>
                    <g>
                        <circle className="fill-yellow" cx="30.24" cy="346.32" r="4.89" />
                        <text className="font-helvetica text-xs font-light fill-yellow" transform="translate(58.26 351.21)">{tags[4].text}</text>
                    </g>
                </g>
            </svg>
        </div>
    )
}