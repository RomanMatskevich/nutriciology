export default function Intro({imageUrl}: {imageUrl: string}){
    return(
        <div className="text-green" id = "intro">
            <h1 className="text-3xl md:text-6xl leading-[38px] my-7 md:my-10 mx-auto font-swift w-max">Tymoschuk Oksana</h1>
            <img 
                src = {imageUrl || ''}
                className="rounded-lg w-full h-full object-cover max-w-[428px] max-h-[513px] mx-auto"
            />
            <div className="flex justify-between items-end px-6 font-helvetica text-xs md:text-base uppercase -mt-8">
                <p className="uppercase">HEALTH MENTOR</p>
                <img 
                    src = "/svg/molecule.svg"
                    className="w-20 h-20"
                />
            </div>
        </div>
    )
}