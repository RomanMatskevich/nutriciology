export default function Intro({imageUrl}: {imageUrl: string}){
    return(
        <div className="text-green" id = "intro">
            <h1 className="text-3xl md:text-6xl lg:text-7xl leading-[38px] mb-7 md:mb-10 mx-auto font-swift w-max mt-16 md:mt-24">Tymoschuk Oksana</h1>
            <img 
                src = {imageUrl || ''}
                className="rounded-lg w-full h-full object-cover max-w-[428px] max-h-[513px] lg:max-h-[700px] lg:max-w-[580px] mx-auto"
                loading="lazy"
            />
            <div className="flex justify-between items-end px-6 font-roboto text-xs md:text-base lg:text-xl xl:text-2xl uppercase -mt-8 md:-mt-16 lg:-mt-28 md:px-16 lg:px-24">
                <p className="uppercase">HEALTH MENTOR</p>
                <img 
                    src = "/svg/molecule.svg"
                    className="w-20 h-20 md:w-40 md:h-40 lg:h-60 lg:w-60"
                    loading="lazy"
                />
            </div>
        </div>
    )
}