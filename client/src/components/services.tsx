import ServiceButton from "./ui/serviceButton"


export default function Services(){
    return(
        <div className="px-6 text-green">
             <h4 className="font-swift text-3xl">Services /</h4>
             <p className="w-max mx-auto text-sm font-light italic mb-10">Послуги</p>
            <ServiceButton title = "Особиста консультація" price={4500}/>
        </div>
    )
}