export default function AboutMe({ tags }: { tags: string[] }) {
    return (
        <div className="font-halvetica text-green" id = "aboutMe">
            <h2 className="font-swift text-3xl px-6">About Me /</h2>
            <p className="w-max mx-auto text-sm font-light italic">Про мене</p>
            <div className="space-y-10 px-6">
                {tags.map((tag, i) =>
                    <p className="flex gap-4 items-start">{++i}{tag}</p>
                )}
            </div>
            
        </div>
    )
}