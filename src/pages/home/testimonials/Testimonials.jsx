
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import useTestimonials from "../../../hooks/useTestimonials";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [testimonials] = useTestimonials()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="mb-24">
            <h2 className="font-poppins font-bold  text-3xl text-center text-[#1F1632] mt-20 mb-16">Testimonials</h2>
            <Slider {...settings}>
                {
                    testimonials.map(item => <div key={item.id}>
                        <div className="testimonial-top flex items-center gap-4">
                            <img className="w-16" src={item.image} alt="" />
                            <h3 className="font-poppins font-semibold text-xl text-[#000]">{item.location}</h3>
                        </div>
                        <div className="testimonial-bottom">
                            <p className="pr-5 mt-4 font-poppins font-normal text-base text-[#707070]">{item.testimonial}</p>
                        </div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={5}
                            readOnly
                            className="w-5 mt-4"
                        />

                    </div>)
                }
            </Slider>
        </div>
    );
}


export default Testimonials