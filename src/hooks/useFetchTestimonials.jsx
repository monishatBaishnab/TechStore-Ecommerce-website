import { useEffect } from "react";
import { useState } from "react";

const useFetchTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://tech-store-server-p0qyc2oro-monishats-projects.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, []);
    return testimonials;
};

export default useFetchTestimonials;