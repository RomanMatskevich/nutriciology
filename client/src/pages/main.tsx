import Header from "../components/header"
import Intro from "../components/intro"
import AboutMe from "../components/aboutMe"
import Present from "../components/present"
import Testimonials from "../components/testimonials"
import Contacts from "../components/contacts"
import useFetching from "../hooks/useFetching"
import Services from "../components/services"
import { useRef } from "react"
type SectionRef = React.RefObject<HTMLDivElement>;

export default function Main() {
    const { data, loading, error } = useFetching(process.env.REACT_APP_BACKEND_URL + "/api/main-page?populate[mainPhoto]=*&populate[Reviews]=*&populate[ContactMedia]=*&populate[AboutMe][populate]=*&populate[PresentImage]=*")
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

    if (loading) return <div>Loading</div>
    return (
        <div className="space-y-16">
            <Header buttons={HeaderButtons} scrollToSection = {scrollToSection}/>
            <Intro imageUrl={process.env.REACT_APP_BACKEND_URL + data.data.attributes.mainPhoto.data.attributes.url} />
            <div ref={AboutMeRef}>
                <AboutMe
                    suggestions={data.data.attributes.AboutMe.Suggestion}
                    mainImgUrl={process.env.REACT_APP_BACKEND_URL + data.data.attributes.AboutMe.Main.data.attributes.url}
                    leftImgUrl={process.env.REACT_APP_BACKEND_URL + data.data.attributes.AboutMe.Left.data.attributes.url}
                    rightImgUrl={process.env.REACT_APP_BACKEND_URL + data.data.attributes.AboutMe.Right.data.attributes.url}
                />
            </div>
            <div ref={ServicesRef}>
                <Services />
            </div>
            <Present imgUrl={process.env.REACT_APP_BACKEND_URL + data.data.attributes.PresentImage.data.attributes.url} />
            <div ref={TestimonialsRef}>
                <Testimonials reviews={data.data.attributes.Reviews} />
            </div>
            <div ref={ContactsRef}>
                <Contacts imgUrl={process.env.REACT_APP_BACKEND_URL + data.data.attributes.ContactMedia.data.attributes.url} />
            </div>
        </div>
    )

}