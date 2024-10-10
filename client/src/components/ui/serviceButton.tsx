import { IconArrowBarRight } from "@tabler/icons-react";
import Link from "next/link";

interface ServiceButtonProps{
    id: number
    title: string;
    price: number;
}


export default function ServiceButton({title, price, id} : ServiceButtonProps){
    return(
        <div className="text-green flex flex-col items-end">
            <div className="w-full border-b border-green flex justify-between mb-8 text-sm md:text-xl lg:text-2xl pb-2 md:pb-5 lg:pb-6 font-roboto">
                {title}
                <span className="font-medium">{price.toLocaleString('uk-UA')} грн</span>
            </div>
            <Link 
                className="flex items-center border text-xs md:text-base lg:text-lg rounded-lg border-green hover:bg-green hover:text-yellow font-normal px-5 py-2 md:px-5 md:py-3 lg:px-6 lg:py-[14px] gap-2.5 md:gap-4 uppercase w-max"
                href={`/services/${id}`}
            >
                Детальніше
                <IconArrowBarRight stroke = {1}/>
            </Link>
        </div>
    )
}