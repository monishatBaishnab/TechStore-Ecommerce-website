import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import PageTitle from "../../components/PageTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import 'swiper/css/effect-fade';
import BrandCard from "../../components/BrandCard";

const BrandProducts = () => {
    const brandProducts = useLoaderData();
    const { brand } = useParams();

    return (
        <section>
            <PageTitle name={brand} page='Brand Products' />
            <div>
                <div className="c-container">
                    <div className="services">
                        <Swiper
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            slidesPerView={1}
                            spaceBetween={5}
                            effect={'fade'}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Navigation, EffectFade]}
                            className="services" >

                            {
                                brandProducts?.map(product => <SwiperSlide key={product._id}><BrandCard /></SwiperSlide>)
                            }

                            <div className='flex items-center gap-1 justify-end mt-10'>
                                <span className='swiper-button-prev service-btn-prev p-2 text-2xl transition-all rounded-md bg-green-100'><BsArrowLeft className='' /></span>
                                <span className='swiper-button-next service-btn-next p-2 text-2xl transition-all rounded-md bg-green-100'><BsArrowRight className='' /></span>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        brandProducts?.map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BrandProducts;