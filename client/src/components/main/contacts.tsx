import { IconArrowBarRight } from "@tabler/icons-react";
import SectionHeader from "../ui/sectionHeader";

interface ContactsProps {
  imgUrl: string;
}

export default function Contacts({ imgUrl }: ContactsProps) {
  return (
    <div className="bg-green rounded-lg font-roboto text-yellow py-16 px-6 md:p-10 md:px-16 lg:p-16 lg:px-24 space-y-10">
      <SectionHeader title="My Contacts //" description="мої контакти" className="text-yellow"/>
      <p className="font-light block md:hidden">
        Саме час почати піклуватись про своє харчування та здоровʼя.
      </p>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-x-0 md:gap-x-4 px-4 md:px-0">
        <div className="col-span-2 col-start-2 md:col-start-2 md:col-span-4">
          <img
            src={imgUrl}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12 md:col-start-7 md:col-span-5 flex flex-col justify-center">
          <p className="font-light hidden md:block text-center text-lg lg:text-xl mb-10 lg:mb-16">
            Саме час почати піклуватись про своє харчування та здоровʼя.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center gap-5 md:gap-10 mt-10 md:mt-0">
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
  );
}
