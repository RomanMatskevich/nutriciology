import { Text } from "../../types";

interface ICircleProps {
    tags: Text[] | null;
    align: boolean;
}


export default function CirclePoints({ tags, align }: ICircleProps) {
    if (!tags) return null
    if (tags.length === 0) return null
    return (
        <div>
            {align ? (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1344.94 414.69" className="h-[45vh] sm:h-[60vh] md:h-[80vh] w-max">
                    <switch>
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
                        <rect x="-997.88" y="188.98" className="fill-none stroke-yellow" width="772.81" height="15.98" />
                    </switch>
                </svg>
            ) : (
                <div className="flex justify-end">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 369.01 414.69" className="h-[45vh] sm:h-[60vh] md:h-[80vh] w-max">
                        <switch>
                            <g>
                                <g>
                                    <circle className="fill-yellow" cx="281.24" cy="62.35" r="4.89" />
                                    <text transform="matrix(1 0 0 1 186.2648 67.24)" className="font-helvetica text-xs font-light fill-yellow">{tags[0].text}</text>
                                </g>
                                <g>
                                    <circle className="fill-yellow" cx="226.23" cy="121.03" r="4.89" />
                                    <text transform="matrix(1 0 0 1 131.249 125.9224)" className="font-helvetica text-xs font-light fill-yellow">{tags[1].text}</text>
                                </g>
                                <g>
                                    <circle className="fill-yellow" cx="204.51" cy="194.84" r="4.89" />
                                    <text transform="matrix(1 0 0 1 109.5298 199.7305)" className="font-helvetica text-xs font-light fill-yellow">{tags[2].text}</text>
                                </g>
                                <g>
                                    <circle className="fill-yellow" cx="222.85" cy="281.72" r="4.89" />
                                    <text transform="matrix(1 0 0 1 127.8676 286.6105)" className="font-helvetica text-xs font-light fill-yellow">{tags[3].text}</text>
                                </g>
                                <g>
                                    <circle className="fill-yellow" cx="279.86" cy="346.18" r="4.89" />
                                    <text transform="matrix(1 0 0 1 184.8806 351.0677)" className="font-helvetica text-xs font-light fill-yellow">{tags[4].text}</text>
                                </g>
                                <g>
                                    <path className="fill-none stroke-yellow stroke-1" d="M370.67,372.39c-91.6,0-166.03-74.87-166.03-167.43c0-92.56,74.43-167.43,166.03-167.43
                        c91.6,0,166.03,74.87,166.03,167.43C536.71,297.52,462.27,372.39,370.67,372.39z"/>
                                    <rect x="536.71" y="199.36" width="772.81" height="15.98" />
                                </g>
                            </g>
                        </switch>
                    </svg>
                </div>
            )}
        </div>
    )
}
