import Header from "../components/header"
import Intro from "../components/intro"
import AboutMe from "../components/aboutMe"
import Present from "../components/present"
import Testimonials from "../components/testimonials"
import Contacts from "../components/contacts"
export default function Main(){
    const HeaderButtons = [
        {text: 'Про мене'},
        {text: 'Послуги'},
        {text: 'Відгуки'},
        {text: 'Контакти'},
    ]
    return(
        <div>
            <Header buttons = {HeaderButtons}/>
            <Intro />
            <AboutMe tags = {["tag1", "tag2"]}/>
            <Present />
            <Testimonials />
            <Contacts />
        </div>
    )
}