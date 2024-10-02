import { Link, useParams } from "react-router-dom";
import { IconArrowBarRight } from "@tabler/icons-react";
import useFetching from "../hooks/useFetching";
import "./../App.css";
import CirclePoints from "../components/services/circlePoints";
import { Text } from "../types";
import SentencesList from "../components/sentencesList";
import { splitSentenceToParagraphs } from "../utils";
import UrgentModal from "../components/services/urgentModal";
import { useState } from "react";
import CheckBox from "../components/ui/checkBox";
import SectionHeader from "../components/ui/sectionHeader";
interface FetchDataService {
  title: string;
  subTitle: string;
  description: string;
  price: number;
  hint: string | null;
  PointsAfterServiceLeftCircle: Text[] | null;
  PointsAfterServiceRightCircle: Text[] | null;
  descriptionTags: {
    id: number;
    title: string;
    tags: Text[];
  };
  secondHint: string | null;
  mustBeReadTags: {
    id: number;
    title: string;
    tags: Text[];
  } | null;
  urgentlyField: boolean;
}

export default function Service() {
  const { id } = useParams();
  const [isOpenUrgentModal, setIsOpenUrgentModal] = useState<boolean>(false);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  const queryUrl =
    process.env.REACT_APP_BACKEND_URL +
    "/api/services/" +
    id +
    "?populate[PointsAfterServiceLeftCircle]=*&populate[PointsAfterServiceRightCircle]=*&populate[descriptionTags][populate]=*&populate[mustBeReadTags][populate]=*";
  const { data, loading, error } = useFetching(queryUrl);
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
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
  } = data.data.attributes as FetchDataService;
  return (
    <div className="text-yellow tracking-[2.1px] leading-[27px]">
      <div className="pt-4 px-6 pb-12 md:px-16 md:pt-12 md:pb-24 text-green">
        <Link to="/">
          <IconArrowBarRight
            className="font-bold md:h-6 md:w-6 rotate-180"
            stroke={1}
          />
        </Link>
        <SectionHeader title={title} description={subTitle} className="text-green !mx-auto"/>
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
          <CirclePoints tags={PointsAfterServiceLeftCircle} align={true} />
        )}
        {PointsAfterServiceRightCircle && (
          <CirclePoints tags={PointsAfterServiceRightCircle} align={false} />
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
      <button className="flex border text-xs md:text-base rounded-lg font-normal mb-10 border-green px-5 py-2 md:px-5 md:py-3 lg:px-6 lg:py-[14px] gap-2.5 md:gap-4 uppercase w-max mx-auto items-center mt-10 md:mt-14 lg:mt-24 text-green">
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
