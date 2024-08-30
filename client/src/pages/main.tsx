import { lazy, Suspense, useRef } from 'react'
import Header from "../components/header"
import Intro from "../components/intro"
import AboutMe from "../components/main/aboutMe"
import Present from "../components/present"
import Testimonials from "../components/testimonials"
import Contacts from "../components/contacts"
import useFetching from "../hooks/useFetching"
import Services from "../components/services"
const Solutions = lazy(() => import('../components/solutions'));
type SectionRef = React.RefObject<HTMLDivElement>;
const mainPageUrl = `${process.env.REACT_APP_BACKEND_URL}/api/main-page?populate[mainPhoto]=*&populate[Reviews]=*&populate[ContactMedia]=*&populate[AboutMe][populate]=*&populate[PresentImage]=*`
const servicesUrl = `${process.env.REACT_APP_BACKEND_URL}/api/services?fields[0]=subTitle&fields[1]=price`;


export default function Main() {
    const { data: mainPageData, loading: mainLoading, error: mainError } = useFetching(mainPageUrl)
    const { data: serviceData, loading: servicesLoading, error: servicesErorr } = useFetching(servicesUrl)
    const AboutMeRef: SectionRef = useRef(null)
    const ServicesRef: SectionRef = useRef(null)
    const TestimonialsRef: SectionRef = useRef(null)
    const ContactsRef: SectionRef = useRef(null)
    const scrollToSection = (ref: SectionRef) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const HeaderButtons = [
        { 
            text: 'Про мене', 
            ref: AboutMeRef
        },
        { 
            text: 'Послуги', 
            ref: ServicesRef
        },
        { 
            text: 'Відгуки', 
            ref: TestimonialsRef
        },
        { 
            text: 'Контакти',
            ref: ContactsRef
        },
    ]
    if(mainError || servicesErorr) return <div>adsads</div>;
    if (mainLoading || servicesLoading) return <div>Loading</div>
    return (
        <div className="space-y-16">
            <Header buttons={HeaderButtons} scrollToSection = {scrollToSection}/>
            <Intro imageUrl={process.env.REACT_APP_BACKEND_URL + mainPageData.data.attributes.mainPhoto.data.attributes.url} />
            <div ref={AboutMeRef}>
                <AboutMe
                    suggestions={mainPageData.data.attributes.AboutMe.Suggestion}
                    mainImgUrl={process.env.REACT_APP_BACKEND_URL + mainPageData.data.attributes.AboutMe.Main.data.attributes.url}
                    leftImgUrl={process.env.REACT_APP_BACKEND_URL + mainPageData.data.attributes.AboutMe.Left.data.attributes.url}
                    rightImgUrl={process.env.REACT_APP_BACKEND_URL + mainPageData.data.attributes.AboutMe.Right.data.attributes.url}
                />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Solutions />
            </Suspense>
            <div ref={ServicesRef} >
                <Services services = {serviceData.data}/>
            </div>
            <Present imgUrl={process.env.REACT_APP_BACKEND_URL + mainPageData.data.attributes.PresentImage.data.attributes.url} />
            <div ref={TestimonialsRef}>
                <Testimonials reviews={mainPageData.data.attributes.Reviews} />
            </div>
            <div ref={ContactsRef}>
                <Contacts imgUrl={process.env.REACT_APP_BACKEND_URL + mainPageData.data.attributes.ContactMedia.data.attributes.url} />
            </div>
        </div>
    )

}