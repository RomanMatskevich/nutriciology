import { lazy, Suspense, useRef } from "react";
import Header from "../components/main/header";
import Intro from "../components/main/intro";
import AboutMe from "../components/main/aboutMe";
import Present from "../components/main/present";
import Testimonials from "../components/main/testimonials";
import Contacts from "../components/main/contacts";
import Services from "../components/main/services";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
const Solutions = lazy(() => import("../components/main/solutions"));
import { MainPageInfo, ServicesInfo } from "@/types";
type SectionRef = React.RefObject<HTMLDivElement>;
export const getServerSideProps: GetServerSideProps<{ mainPage: MainPageInfo, services: ServicesInfo  }> =
  (async () => {
    const mainPageUrl = `${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/main-page?populate[mainPhoto]=*&populate[Reviews]=*&populate[ContactMedia]=*&populate[AboutMe][populate]=*&populate[PresentImage]=*`;
    const servicesUrl = `${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/services?fields[0]=subTitle&fields[1]=price`;
    const mainResponse = await fetch(mainPageUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_STRAPI_READ_TOKEN || "",
      },
    });
    
    const servicesResponse = await fetch(servicesUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_STRAPI_READ_TOKEN || "",
      },
    });
    
    const mainPage: MainPageInfo = await mainResponse.json();
    console.log(mainPage.data.attributes.Reviews.data)
    const services: ServicesInfo = await servicesResponse.json()
    return { props: { mainPage, services } };
  }) satisfies GetServerSideProps<{ mainPage: MainPageInfo, services: ServicesInfo }>;
export default function Home({
  mainPage, services
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const AboutMeRef: SectionRef = useRef(null);
  const ServicesRef: SectionRef = useRef(null);
  const TestimonialsRef: SectionRef = useRef(null);
  const ContactsRef: SectionRef = useRef(null);
  const scrollToSection = (ref: SectionRef) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const HeaderButtons = [
    {
      text: "Про мене",
      ref: AboutMeRef,
    },
    {
      text: "Послуги",
      ref: ServicesRef,
    },
    {
      text: "Відгуки",
      ref: TestimonialsRef,
    },
    {
      text: "Контакти",
      ref: ContactsRef,
    },
  ];
  // if (mainError || servicesErorr) return <div>adsads</div>;
  // if (mainLoading || servicesLoading) return <div>Loading</div>;
  return (
    <div className="tracking-[2.1px] leading-[27px]">
      <Header buttons={HeaderButtons} scrollToSection={scrollToSection} />
      <Intro
        imageUrl={
          process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + mainPage.data.attributes.mainPhoto.data.attributes.url
        }
      />
      <div ref={AboutMeRef}>
        <AboutMe
          suggestions={mainPage.data.attributes.AboutMe.Suggestion}
          mainImgUrl={
            process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
            mainPage.data.attributes.AboutMe.Main.data.attributes.url
          }
          leftImgUrl={
            process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
            mainPage.data.attributes.AboutMe.Left.data.attributes.url
          }
          rightImgUrl={
            process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
            mainPage.data.attributes.AboutMe.Right.data.attributes.url
          }
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Solutions />
      </Suspense>
      <div ref={ServicesRef}>
        <Services services={services.data} />
      </div>
      <Present
        imgUrl={
          process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
          mainPage.data.attributes.PresentImage.data.attributes.url
        }
      />
      <div ref={TestimonialsRef}>
        <Testimonials reviews={mainPage.data.attributes.Reviews.data} />
      </div>
      <div ref={ContactsRef}>
        <Contacts
          imgUrl={
            process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL +
            mainPage.data.attributes.ContactMedia.data.attributes.url
          }
        />
      </div>
    </div>
  );
}
