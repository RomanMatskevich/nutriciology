import { IconArrowBarRight } from "@tabler/icons-react";
import Link from "next/link";
export default function GiftSuccess() {
    return (
        <div className="py-10 px-6 text-green text-xs md:text-lg lg:text-xl font-light">
            <h1 className="font-swift text-3xl md:text-4xl">Get your gift!</h1>
            <h2 className="font-robotoItalic border-b border-green pb-4">
                Дякую за ваш інтерес! Я щойно відправила ваш безкоштовний гайд на вказану електронну адресу.
            </h2>
            <h3 className="font-normal pb-5 pt-10 md:pt-14 lg:pt-24">Що Далі:</h3>
            <p className="">
                Будь ласка, перевірте свою пошту, щоб завантажити гайд.
                <br></br><br></br>
                Якщо ви не знайдете листа у своїй вхідній скриньці, перевірте папку &apos;Спам&apos; або &apos;Реклама&apos;. 
            </p>
            <h4 className="font-normal pb-5 pt-10 md:pt-14 lg:pt-24">Примітка</h4>
            <p className="">
                Бажаю вам успіхів у досягненні ваших цілей зі здорового харчування! 
                <br></br><br></br>
                Якщо у вас виникнуть запитання або вам знадобиться допомога, я завжди на зв&apos;язку.
            </p>
            <Link 
                className="flex border text-xs md:text-base rounded-lg font-normal border-green px-5 py-2 md:px-5 md:py-3 lg:px-6 lg:py-[14px] gap-2.5 md:gap-4 uppercase w-max mx-auto items-center mt-10 md:mt-14 lg:mt-24"
                href = "/"
            >
                на головну
                <IconArrowBarRight className="font-bold md:h-6 md:w-6" stroke = {1}/>
            </Link>
        </div>
    )
}