import SentencesList from "../sentencesList";
import SectionHeader from "../ui/sectionHeader";
interface AboutMeProps {
  suggestions: { id: number; text: string }[];
  mainImgUrl: string;
  leftImgUrl: string;
  rightImgUrl: string;
}

export default function AboutMe({
  suggestions,
  leftImgUrl,
  mainImgUrl,
  rightImgUrl,
}: AboutMeProps) {
  return (
    <div className="font-roboto text-green md:px-16 lg:px-24 mt-16 md:mt-24" id="aboutMe">
      <SectionHeader title="About me // " description="про мене" className="text-green mx-6 md:mx-0 "/>
      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <div className="flex flex-col justify-center md:w-1/2 ">
          <div className="flex gap-4 md:gap-6 h-60 md:h-[347px] lg:h-[510px]">
            <img
              src={leftImgUrl}
              className="h-[60%] relative w-1/4"
              style={{ bottom: "-35%" }}
            />
            <img src={mainImgUrl} className="h-full w-1/2" />
            <img
              src={rightImgUrl}
              className="h-[60%] relative w-1/4"
              style={{ bottom: "-5%" }}
            />
          </div>
        </div>
        <SentencesList
          tags={suggestions}
          title={""}
          backgroundStyles="rounded-lg "
        />
      </div>
    </div>
  );
}
