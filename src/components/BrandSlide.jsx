import 'animate.css';
import { BsArrowRight } from 'react-icons/bs';
import PropTypes from 'prop-types';

const BrandSlide = ({slider}) => {
    return (
        <div className="bg-slate-100 dark:bg-slate-600">
            <div className="px-8 c-container min-h-[550px] flex items-center bg-slate-100 dark:bg-slate-600">
                <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                    <div className='text space-y-5 col-span-2 inline-flex flex-col justify-center min-h-[400px]'>
                        <h2 className='text-4xl font-medium text-cyan-500'>{slider.headline}</h2>
                        <p className='text-lg text-slate-500 dark:text-slate-300'>{slider.description}</p>
                        <button className='rounded-full text-cyan-500 flex items-center gap-2 mt-3'>{slider.ctaText} <BsArrowRight className='text-xl' /></button>
                    </div>
                    <div className='flex items-center w-full justify-center md:col-span-1'>
                        <div className='image'>
                            <img src={slider.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BrandSlide.propTypes = {
    slider: PropTypes.object,
}

export default BrandSlide;

