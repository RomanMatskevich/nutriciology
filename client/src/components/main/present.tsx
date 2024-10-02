import Lottie from "lottie-react";
import GiftAnimation from "./../../assets/lottie/Animation - 1724262577850.json";
import PresentForm from "./presentForm";
import useModal from "../../hooks/useModal";
import SectionHeader from "../ui/sectionHeader";
interface PresentProps {
  imgUrl: string;
}

export default function Present({ imgUrl }: PresentProps) {
  const { isShow, toggle } = useModal();
  return (
    <div
      id="present"
      className="font-roboto py-16 px-6 md:p-10 md:px-16 lg:px-24 lg:p-16 bg-yellow rounded-lg text-green font-light"
    >
      <PresentForm isShow={isShow} toggleShow={toggle} />
      <SectionHeader title="Present //" description="подарунок" className="text-green"/>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[12vw] lg:gap-96">
        <div className="flex flex-col justify-between md:text-lg lg:text-xl">
          <div className="">
            <p className="border-b border-green pb-2 mb-4">Подарунок:</p>
            На знак вдячності за вашу підтримку, дарую вам безкоштовний гайд по
            збалансованій тарілці.
            <br></br>
            <br></br>
            Натискай знизу, щоб отримати його.
          </div>
          <div className="hidden md:flex flex-col items-center">
            <button onClick={toggle} className="cursor-pointer">
              <Lottie
                animationData={GiftAnimation}
                className="!bg-green rounded-lg w-20 h-20 lg:w-24 lg:h-24"
              />
            </button>
            <p className="w-max mx-auto mt-5">
              Твій гайд по збалансованій тарілці
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-10 md:mt-0">
          <img src={imgUrl} className=" object-cover w-full md:w-3/4 h-[500px] sm:h-[670px] md:h-full rounded-lg"/>
        </div>
      </div>

      <div className="flex flex-col items-center md:hidden gap-2.5 mt-10">
        <button onClick={toggle} className="cursor-pointer">
          <Lottie
            animationData={GiftAnimation}
            className="!bg-green rounded-lg w-20 h-20"
          />
        </button>
        <p className="text-sm  mt-2.5">
          Твій гайд по збалансованій тарілці
        </p>
      </div>
    </div>
  );
}
