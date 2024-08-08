interface AboutMeProps{
    suggestions: {id: number; text:string}[], 
    mainImgUrl: string,
    leftImgUrl: string
    rightImgUrl: string

}


export default function AboutMe({ suggestions, leftImgUrl, mainImgUrl, rightImgUrl }: AboutMeProps) {
    return (
        <div className="font-halvetica text-green" id = "aboutMe">
            <h2 className="font-swift text-3xl px-6">About Me /</h2>
            <p className="w-max mx-auto text-sm font-light italic">Про мене</p>
            <div className="flex gap-4 h-60">
                <img 
                    src = {leftImgUrl} 
                    className="h-[60%] relative"
                    style={{ bottom: '-35%' }}
                />
                <img 
                    src = {mainImgUrl}
                    className=""
                />
                <img 
                    src = {rightImgUrl}
                    className="h-[60%] relative"    
                    style={{ bottom: '-5%' }}
                />
            </div>
           
            <div className="space-y-10 px-6">
                {suggestions.map((suggest) =>
                    <p className="flex gap-4 items-start">
                        <span>{suggest.id}</span>
                        {suggest.text}
                    </p>
                )}
            </div>
            
        </div>
    )
}