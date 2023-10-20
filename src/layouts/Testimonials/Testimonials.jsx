// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import useFetchTestimonials from '../../hooks/useFetchTestimonials';
import TestimonialsCard from '../../components/TestimonialsCard';
import SectionTitle from '../../components/SectionTitle';

const Testimonials = () => {
    const testimonials = useFetchTestimonials();
    return (
        <section className='bg-white dark:bg-slate-800 testimonials'>
            <SectionTitle name='Testimonials' title='Hear What Our Community Has to Say' />
            <div className='c-container'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-[40px_!important]"
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide key={testimonial._id}><TestimonialsCard testimonial={testimonial} /></SwiperSlide>)
                    }
                    
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;