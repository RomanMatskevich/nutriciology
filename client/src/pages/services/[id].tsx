import { IconArrowBarRight } from "@tabler/icons-react";
import useWindowSize from "@/hooks/useWindowSize";
import SentencesList from "../../components/sentencesList";
import { splitSentenceToParagraphs } from "../../utils";
import UrgentModal from "../../components/services/urgentModal";
import { useState } from "react";
import CheckBox from "../../components/ui/checkBox";
import SectionHeader from "../../components/ui/sectionHeader";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { FullServiceInfo } from "../../types";
import HalfSircle from "@/components/services/halfSircle";
export const getServerSideProps: GetServerSideProps<{
  serviceInfo: FullServiceInfo;
}> = (async (context) => {
  const { query } = context;
  const queryUrl =
    process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
    "/api/services/" +
    query.id +
    "?populate[PointsAfterServiceLeftCircle]=*&populate[PointsAfterServiceRightCircle]=*&populate[descriptionTags][populate]=*&populate[mustBeReadTags][populate]=*";
  const res = await fetch(queryUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_STRAPI_READ_TOKEN || "",
    },
  });
  const serviceInfo: FullServiceInfo = await res.json();
  return { props: { serviceInfo } };
}) satisfies GetServerSideProps<{ serviceInfo: FullServiceInfo }>;
export default function Service({
  serviceInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isOpenUrgentModal, setIsOpenUrgentModal] = useState<boolean>(false);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  const { width } = useWindowSize();
  const baseCircleRadius = width && width < 600 ?  155 : 187
  const smallDotsRadius = width && width < 600 ? 5 : 7
  const {
    title,
    subTitle,
    description,
    price,
    hint,
    PointsAfterServiceLeftCircle,
    PointsAfterServiceRightCircle,
    descriptionTags,
    secondHint,
    mustBeReadTags,
    urgentlyField,
  } = serviceInfo.data.attributes;
  return (
    <div className="text-yellow tracking-[2.1px] leading-[27px]">
      <div className="pt-4 px-6 pb-12 md:px-16 md:pt-12 md:pb-24 text-green">
        <Link href="/">
          <IconArrowBarRight
            className="font-bold md:h-6 md:w-6 rotate-180"
            stroke={1}
          />
        </Link>
        <SectionHeader
          title={title}
          description={subTitle}
          className="text-green !mx-auto"
        />
        <div className="space-y-7 text-base md:text-lg font-light pt-10">
          {splitSentenceToParagraphs(description).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="flex justify-between items-start border-b border-green pb-3">
            <span>вартість</span>
            <span className="font-medium">{price} ₴</span>
          </div>
          {hint && <p className="my-10">{hint}</p>}
        </div>
        {urgentlyField === true && (
          <div className="space-y-5 mt-10 md:mt-16 md:text-lg">
            <div className="flex gap-5">
              <CheckBox isChecked={isUrgent} setIsChecked={setIsUrgent} />
              <p className="font-light">
                Додати послугу “Термінова консультація”
                <span className="font-normal">+2000 грн</span>
              </p>
            </div>
            <button
              className="flex gap-3 items-center"
              onClick={() => {
                setIsOpenUrgentModal(true);
              }}
            >
              <span>Ознайомитись</span>
              <IconArrowBarRight
                className="font-bold md:h-6 md:w-6"
                stroke={1}
              />
            </button>
          </div>
        )}
      </div>
      <div className="bg-green rounded-[20px]">
        <p className="px-6 md:px-16 pb-12 pt-16 md:pt-24 md:pb-20 md:text-lg">
          Що отримуєте від консультації:
        </p>
        {PointsAfterServiceLeftCircle && (
          <div className="bg-green py-7 md:py-12 flex justify-start">
            <HalfSircle
              dotsRadius={smallDotsRadius}
              baseCircleRadius={baseCircleRadius}
              dotsCount={1}
              position="left"
              tags = {PointsAfterServiceLeftCircle}
            />
          </div>
        )}
        {PointsAfterServiceRightCircle && (
          <div className="bg-green py-7 md:py-12 flex justify-end">
            <HalfSircle
              dotsRadius={smallDotsRadius}
              baseCircleRadius={baseCircleRadius}
              dotsCount={1}
              position="right"
              tags = {PointsAfterServiceRightCircle}
            />
          </div>
        )}
      </div>
      <SentencesList
        tags={descriptionTags.tags}
        title={descriptionTags.title}
        backgroundStyles="text-green"
      />
      {secondHint && (
        <p className="my-10 px-6 md:px-16 md:text-lg">{secondHint}</p>
      )}
      {mustBeReadTags && (
        <SentencesList
          tags={mustBeReadTags.tags}
          title={mustBeReadTags.title}
          backgroundStyles="text-yellow bg-green rounded-lg "
        />
      )}
      <button className="flex border text-xs md:text-base rounded-lg font-normal mb-10 border-green hover:bg-green hover:text-yellow px-5 py-2 md:px-5 md:py-3 lg:px-6 lg:py-[14px] gap-2.5 md:gap-4 uppercase w-max mx-auto items-center mt-10 md:mt-14 lg:mt-24 text-green">
        придбати
        <IconArrowBarRight className="font-bold md:h-6 md:w-6" stroke={1} />
      </button>
      {urgentlyField === true && (
        <UrgentModal
          isOpen={isOpenUrgentModal}
          setIsOpen={setIsOpenUrgentModal}
          setUrgentlyValue={setIsUrgent}
        />
      )}
    </div>
  );
}
