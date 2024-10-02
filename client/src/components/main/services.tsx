import SectionHeader from "../ui/sectionHeader";
import ServiceButton from "../ui/serviceButton"

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
        <div className="py-16 px-6 md:p-10 md:px-16 lg:p-16 lg:px-24 text-green">
            <SectionHeader title="Services //" description="послуги" className="text-green"/>
            <div className="space-y-10 md:space-y-16">
                {services.map(service => 
                    <div key = {service.id}>
                        <ServiceButton title = {service.attributes.subTitle} price = {service.attributes.price} id = {service.id}/>
                    </div>
                )}
            </div>
        </div>
    )
}