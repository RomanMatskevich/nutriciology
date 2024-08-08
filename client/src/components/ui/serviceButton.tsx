import { IconArrowBarRight } from "@tabler/icons-react";

interface ServiceButtonProps{
    title: string;
    price: number;
}


export default function ServiceButton({title, price} : ServiceButtonProps){
    return(
        <div className="text-green flex flex-col items-end">
            <div className="w-full border-b border-green flex justify-between mb-8">
                {title}
                <span className="font-medium">{price.toLocaleString('uk-UA')} грн</span>
            </div>
            <button className="flex border rounded-lg border-green px-5 py-3 gap-2.5 w-max">
                Детальніше
                <IconArrowBarRight />
            </button>
        </div>
    )
}