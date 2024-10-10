import { IconArrowBarRight } from "@tabler/icons-react";
import { useEffect } from "react";
import SentencesList from "../sentencesList";
interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setUrgentlyValue: (value: boolean) => void;
}

export default function UrgentModal({
  isOpen,
  setIsOpen,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("scroll-blocked");
    } else {
      document.body.classList.remove("scroll-blocked");
    }
    return () => {
      document.body.classList.remove("scroll-blocked");
    };
  }, [isOpen]);
  const sentencesListItms = {
    title: "Коли термінова консультація може бути необхідною :",
    items: [
      {
        id: 1,
        text: "Коли ваш організм потребує екстреної допомоги, таких як вірусні або бактеріальні інфекції/ отруєння/ призначення антибіотиків/ герпес/ підвищення температури/ опіки/ отит/ ангіна та інші ситуації, де необхідна негайна реакція. ",
      },
      {
        id: 2,
        text: "Якщо з певних причин ви не бажаєте чекати на визначену дату консультації і потребуєте термінової допомоги.",
      },
    ],
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-green">
          <div className="w-full h-full bg-yellow text-base md:text-lg font-light">
            <div className="pt-4 px-6 pb-12 md:px-16 md:pt-12 md:pb-24">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="focus:outline-none"
              >
                <IconArrowBarRight
                  className="font-bold md:h-6 md:w-6 rotate-180"
                  stroke={1}
                />
              </button>
              <div className="w-max mb-10 md:mb-16 lg:mb-20 mx-auto">
                <h5 className="font-swift text-3xl md:text-4xl lg:text-5xl">
                  Urgent Consultations //
                </h5>
                <p className="w-max mx-auto text-sm md:text-lg lg:text-xl font-light font-robotoItalic">
                  термінова консультація
                </p>
              </div>
              <p className="font-light">
                <span className="font-normal">Термінова консультація –</span> це
                формат послуги ідеально підходить для людей, які мають нагальну
                потребу у консультації для отримання невідкладної підтримки в
                найближчу вільну дату.{" "}
              </p>
              <div className="flex justify-between items-start border-b border-green pb-3">
                <span>вартість</span>
                <span className="font-normal">2000 ₴</span>
              </div>
              <p className="my-10">
                *За додаткову оплату в сумі 2000 грн до послуги “Особиста
                консультація” чи “Інтерпретація результатів аналазів”, ви маєте
                можливість отримати консультацію в найближчі дні.{" "}
              </p>
            </div>
            <SentencesList
              tags={sentencesListItms.items}
              title={sentencesListItms.title}
              backgroundStyles=" "
            />
          </div>
        </div>
      )}
    </div>
  );
}
