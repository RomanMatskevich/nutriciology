export default function Intro(){
    return(
        <div className="text-green" id = "intro">
            <h1 className="text-3xl leading-[38px] my-7 mx-auto font-swift w-max">Tymoschuk Oksana</h1>
            <div className="flex justify-between items-end px-6 font-halvetica text-xs uppercase">
                <p className="uppercase">HEALTH MENTOR</p>
                <img 
                    src = "/svg/molecule.svg"
                    className="w-20 h-20"
                />
            </div>
        </div>
    )
}