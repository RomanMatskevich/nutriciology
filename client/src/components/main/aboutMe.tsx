interface AboutMeProps {
    suggestions: { id: number; text: string }[],
    mainImgUrl: string,
    leftImgUrl: string
    rightImgUrl: string

}


export default function AboutMe({ suggestions, leftImgUrl, mainImgUrl, rightImgUrl }: AboutMeProps) {
    return (
        <div className="font-helvetica text-green md:p-10 lg:p-16" id="aboutMe">
            <div className="w-max mb-9 md:mb-16 mx-auto md:mx-0">
                <h5 className="font-swift text-3xl md:text-4xl">About me //</h5>
                <p className="w-max mx-auto text-sm md:text-lg font-light italic">про мене</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-10">
                <div className="flex flex-col justify-center md:w-1/2 ">
                    <div className="flex gap-4 md:gap-6 h-60 md:h-[347px]">
                        <img
                            src={leftImgUrl}
                            className="h-[60%] relative w-1/4"
                            style={{ bottom: '-35%' }}
                        />
                        <img
                            src={mainImgUrl}
                            className="h-full w-1/2"
                        />
                        <img
                            src={rightImgUrl}
                            className="h-[60%] relative w-1/4"
                            style={{ bottom: '-5%' }}
                        />
                    </div>
                </div>
                <div className="space-y-10 px-6 w-full md:w-5/12 md:text-lg">
                    {suggestions.map((suggest) =>
                        <p className="flex gap-4 items-start" key = {suggest.id}>
                            <span>{suggest.id}</span>
                            {suggest.text}
                        </p>
                    )}
                </div>

            </div>

        </div>
    )
}