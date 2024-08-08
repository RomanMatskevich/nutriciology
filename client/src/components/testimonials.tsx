import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
import Slider from "react-slick";
import ReviewBlock from "./reviewBlock";



export default function Testimonials( {reviews}: {reviews: {id: number; text:string}[]}, ){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
        
      };
    return(
        <div className="px-6">
            <h5 className="font-swift text-3xl">Testimonials /</h5>
            <p className="w-max mx-auto text-sm font-light italic mb-10">Відгуки</p>
            <Slider {...settings}>
                {reviews.map(review=> <ReviewBlock key = {review.id} text = {review.text}/>)}
            </Slider>
        </div>
    )
}