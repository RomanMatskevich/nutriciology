import { Text } from "../types";
import { splitSentenceToParagraphs } from "../utils";
interface ISentenceList {
    tags: Text[] | null;
    title: string | null;
    backgroundStyles: string;
}

export default function SentencesList({ tags, title, backgroundStyles }: ISentenceList) {
    if (!tags) return null
    return (
        <div className={`${backgroundStyles} pt-4 px-6 pb-12 md:px-16 md:pt-12 md:pb-24 `}>
            <p className="mb-10">{title}</p>
            <div className="space-y-10 md:text-lg lg:text-xl">
                {tags.map((tag, index) => (
                    <div key={tag.id} className="flex gap-4">
                        <span className="font-normal font-strokeLight">0{++index}</span>
                        <div className="font-light">
                            {splitSentenceToParagraphs(tag.text).map((sentence, i) => (
                                sentence ? (
                                    <p key={i} className={`${i > 0 ? 'mt-10' : ''}`}>{sentence}</p>
                                ) : null
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}