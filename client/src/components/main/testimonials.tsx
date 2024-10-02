import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css"
import Slider from "react-slick";
import ReviewBlock from "../reviewBlock";
import SectionHeader from "../ui/sectionHeader";



export default function Testimonials( {reviews}: {reviews: {id: number; text:string}[]}, ){
    var settings = {
        dots: true,
        autoplay: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        }
        ],
        prevArrow: <></>,
        nextArrow: <></>
      };
    return(
        <div className="my-16 mb-28 md:mb-36 md:my-24">
            <SectionHeader title="Testimonials //" description="відгуки" className="text-green mx-6"/>
            <div className="slider-container mx-5">
                <Slider {...settings} className="mt-10 md:mt-16 mb-16 md:mb-24">
                    {reviews.map(review=> 
                        <div key = {review.id} className="px-2">
                            <ReviewBlock text = {review.text}/>
                        </div>
                        
                    )}
                </Slider>
            </div>
        </div>
    )
}