import { useState } from "react";
import { useEffect } from "react";


const useTestimonials = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data)
            })
    }, [])
    return [testimonial]
};

export default useTestimonials;