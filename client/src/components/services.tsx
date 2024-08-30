import ServiceButton from "./ui/serviceButton"

interface ServicesProps {
    services: {
        id: number;
        attributes: {
            price: number;
            subTitle: string
        }
    }[]

}

export default function Services({ services }: ServicesProps) {
    return (
        <div className="px-6 text-green">
            <h4 className="font-swift text-3xl">Services /</h4>
            <p className="w-max mx-auto text-sm font-light italic mb-10">Послуги</p>
            <div className="space-y-10">
                {services.map(service => 
                    <div key = {service.id}>
                        <ServiceButton title = {service.attributes.subTitle} price = {service.attributes.price} id = {service.id}/>
                    </div>
                )}
            </div>
        </div>
    )
}