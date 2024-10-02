import SectionHeader from "../ui/sectionHeader"

export default function Solutions() {
  return (
    <div className="bg-green rounded-lg font-roboto text-yellow py-16 px-6 md:p-10 md:px-16 lg:p-16 lg:px-24 ">
      <SectionHeader title="What do I solve? //" description="З чим я можу допомогти?" className="text-yellow"/>
      <picture className="w-full h-full">
        <source
          media="(min-width: 1024px)"
          srcSet="/svg/human-large.svg"
          className="w-full h-full"
        />
        <img
          src="/svg/human-medium.svg"
          alt="human"
          className="w-full h-full"
        />
      </picture>
      <div className="md:text-lg lg:text-xl font-light  mt-10  md:mt-16 md:mb-24 w-full md:mx-auto md:w-max text-left font-roboto">
        Розглядаю організм як цілісну систему, адже в кожному органі тече однакова кров.
      </div>
    </div>
  );
}
