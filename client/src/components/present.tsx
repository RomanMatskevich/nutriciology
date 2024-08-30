import Lottie from "lottie-react"
import GiftAnimation from "./../assets/lottie/Animation - 1724262577850.json"
import PresentForm from "./presentForm"
import useModal from "../hooks/useModal"
interface PresentProps {
    imgUrl: string
}


export default function Present({ imgUrl }: PresentProps) {
    const { isShow, toggle } = useModal()
    return (
        <div id="present" className="font-helvetica px-6 py-16  md:p-10 lg:p-16 bg-yellow rounded-lg text-green">
            <PresentForm isShow={isShow} toggleShow={toggle} />
            <h4 className="font-swift text-3xl">Present /</h4>
            <p className="w-max mx-auto md:mx-0 text-sm font-light italic mb-10">Безкоштовна консультація</p>
            <div className="md:flex justify-between ">
                <div className="flex flex-col justify-between md:w-1/2">
                    <div>
                        <p className="border-b border-green pb-2 mb-4">Подарунок:</p>
                        На знак вдячності за вашу підтримку, дарую вам безкоштовний гайд по збалансованій тарілці.
                        <br></br><br></br>
                        Натискай знизу, щоб отримати його.
                    </div>
                    <div className="hidden md:block">
                        <button onClick={toggle} className="cursor-pointer">
                            <Lottie animationData={GiftAnimation} />
                        </button>
                        <p className="text-sm italic font-light w-max mx-auto mt-5">Твій гайд по збалансованій тарілці</p>
                    </div>
                </div>
                <img
                    src={imgUrl}
                    className="w-full md:w-5/12 h-full md:h-[480px] rounded-lg mt-10"
                />
            </div>
            <div className="block md:hidden">
                <button onClick={toggle} className="cursor-pointer">
                    <Lottie animationData={GiftAnimation} />
                </button>
                <p className="text-sm italic font-light w-max mx-auto mt-2.5">Твій гайд по збалансованій тарілці</p>
            </div>

        </div>
    )
}