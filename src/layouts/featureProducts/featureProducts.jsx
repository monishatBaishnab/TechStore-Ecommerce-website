import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import useFetchFeatureProducts from "../../hooks/useFetchFeatureProducts";
import FeatureProductCard from "../../components/FeatureProductCard";
import SectionTitle from "../../components/SectionTitle";

const FeatureProducts = () => {
    const products = useFetchFeatureProducts();
    return (
        <section className="bg-white dark:bg-slate-800">
            <SectionTitle name={'Feature'} title='Explore Our Showcase of Featured Products' />
            <div className="c-container pt-2 feature overflow-hidden">
                <Swiper
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    slidesPerView={1}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                    modules={[Navigation]}
                    className="feature overflow-hidden" >

                    {
                        products?.map(product => <SwiperSlide className="my-5" key={product._id}><FeatureProductCard product={product} /></SwiperSlide>)
                    }

                </Swiper>
                <div className='flex items-center gap-5 justify-center mt-10'>
                    <span className='swiper-button-prev feature-btn-prev p-2 text-2xl transition-all rounded-md bg-cyan-100'><BsArrowLeft className='' /></span>
                    <span className='swiper-button-next feature-btn-next p-2 text-2xl transition-all rounded-md bg-cyan-100'><BsArrowRight className='' /></span>
                </div>
            </div>
        </section>
    );
};

export default FeatureProducts;