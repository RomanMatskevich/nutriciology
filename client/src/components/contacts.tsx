import { IconArrowBarRight } from "@tabler/icons-react"



interface ContactsProps{
    imgUrl: string
}


export default function Contacts({imgUrl}: ContactsProps){
    return(
        <div className="bg-green rounded-lg font-halvetica text-yellow py-16 px-6 space-y-10">
            <div>
                <h5 className="font-swift text-3xl">Testimonials /</h5>
                <p className="w-max mx-auto text-sm font-light italic">Відгуки</p>
            </div>
            <p className="font-light">Саме час почати піклуватись про своє харчування та здоровʼя.</p>
            <img 
                src = {imgUrl}
                className="px-20 w-full h-full object-cover"
            />
            <a className="flex border rounded-lg border-yellow px-5 py-3 gap-2.5 w-max mx-auto">
                Instagram
                <IconArrowBarRight />
            </a>
        </div>
    )
}