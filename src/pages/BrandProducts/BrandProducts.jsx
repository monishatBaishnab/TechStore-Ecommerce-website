import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import PageTitle from "../../components/PageTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import 'swiper/css/effect-fade';
import Empty from "../../layouts/Empty/Empty";
import BrandSlide from "../../components/BrandSlide";
import useFetchSliders from "../../hooks/useFetchSliders";

const BrandProducts = () => {
    const brandProducts = useLoaderData();
    const { brand } = useParams();
    const sliders = useFetchSliders(brand);

    return (
        <section>
            <PageTitle name={brand} page='Brand Products' />
            <div className="services relative min-h-[550px]">
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
                        sliders?.map(slider => <SwiperSlide key={slider.headline}><BrandSlide slider={slider} /></SwiperSlide>)
                    }

                </Swiper>
                <span className='swiper-button-prev service-btn-prev p-2 text-2xl transition-all rounded-md bg-cyan-100'><BsArrowLeft className='' /></span>
                <span className='swiper-button-next service-btn-next p-2 text-2xl transition-all rounded-md bg-cyan-100'><BsArrowRight className='' /></span>
            </div>
            <div className="bg-white dark:bg-slate-800">
                <div className="c-container">
                    {
                        brandProducts.length > 0 ?
                            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {
                                    brandProducts?.map(product => <ProductCard key={product._id} product={product} />)
                                }
                            </div>
                            :
                            <Empty />
                    }
                </div>
            </div>
        </section>
    );
};

export default BrandProducts;