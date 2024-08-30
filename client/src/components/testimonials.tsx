import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
import Slider from "react-slick";
import ReviewBlock from "./reviewBlock";



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
        <div className="">
            <div className="w-max text-green mx-6">
                <h5 className="font-swift text-3xl md:text-4xl">Testimonials //</h5>
                <p className="w-max mx-auto text-sm md:text-lg font-light italic">Відгуки</p>
            </div>
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