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
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
        <div className="flex flex-col justify-center col-span-1 md:col-span-7">
          <div className="flex gap-4 h-60 md:h-96 lg:h-[600px]">
            <img
              src={leftImgUrl}
              className="h-[60%] relative w-1/4"
              style={{ bottom: "-35%" }}
              loading="lazy"
            />
            <img src={mainImgUrl} className="h-full w-1/2" loading="lazy"/>
            <img
              src={rightImgUrl}
              className="h-[60%] relative w-1/4"
              style={{ bottom: "-5%" }}
              loading="lazy"
            />
          </div>
        </div>
        <SentencesList
          tags={suggestions}
          title={""}
          backgroundStyles="rounded-lg col-span-1 md:col-span-5"
        />
      </div>
    </div>
  );
}
