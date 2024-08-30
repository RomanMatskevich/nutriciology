import { Text } from "../../types";
import { splitSentenceToParagraphs } from "../../utils";
interface ISentenceList {
    tags: Text[] | null;
    title: string | null;
    backgroundStyles: string;
}

export default function SentencesList({ tags, title, backgroundStyles }: ISentenceList) {
    if (!tags || !title) return null
    return (
        <div className={`${backgroundStyles} px-6 py-10`}>
            <p className="mb-10">{title}</p>
            <div className="space-y-10">
                {tags.map((tag, index) => (
                    <div key={tag.id} className="flex gap-4">
                        <span className="font-normal font-strokeLight">{++index}</span>
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