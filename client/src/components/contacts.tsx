import { IconArrowBarRight } from "@tabler/icons-react"



interface ContactsProps {
    imgUrl: string
}


export default function Contacts({ imgUrl }: ContactsProps) {
    return (
        <div className="bg-green rounded-lg font-helvetica text-yellow py-16 px-6 md:p-10 lg:p-16 space-y-10">
            <div className="w-max">
                <h5 className="font-swift text-3xl md:text-4xl">Contacts //</h5>
                <p className="w-max mx-auto text-sm md:text-lg font-light italic">контакти</p>
            </div>
            <p className="font-light block md:hidden">Саме час почати піклуватись про своє харчування та здоровʼя.</p>
            <div className="md:flex justify-between items-center">
                <img
                    src={imgUrl}
                    className="px-20 md:px-0 w-full h-full object-cover md:w-80 md:h-[430px]"
                />
                <div>
                    <p className="font-light hidden md:block md:max-w-80 text-center text-lg mb-10">Саме час почати піклуватись про своє харчування та здоровʼя.</p>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 md:mt-0">
                        <a className="flex border rounded-lg border-yellow px-5 py-3 gap-2.5 w-max mx-auto md:mx-0">
                            Instagram
                            <IconArrowBarRight />
                        </a>
                        <a className="flex border rounded-lg border-yellow px-5 py-3 gap-2.5 w-max mx-auto md:mx-0">
                            Telegram
                            <IconArrowBarRight />
                        </a>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}