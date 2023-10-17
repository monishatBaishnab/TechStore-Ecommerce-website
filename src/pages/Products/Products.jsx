import SectionTitle from "../../components/SectionTitle";
import {AiFillStar} from 'react-icons/ai'

const Products = () => {
    const section_name = 'Products';
    const section_title = 'Explore Our Cutting-Edge Tech Products';
    const section_description = 'Discover a curated selection of the latest and greatest in technology, from smartphones to smart gadgets.';
    return (
        <div className="bg-slate-100">
            <SectionTitle title={section_title} name={section_name} description={section_description} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-5 rounded-lg">
                        <div className="w-full h-60 overflow-hidden rounded-md">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/S0gt1nd/Google-Pixel-6.jpg" alt="" />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <h3 className="text-slate-900 text-xl font-medium">iPhone 13 Pro</h3>
                            <span className="flex items-center gap-1">4.8 <AiFillStar className="text-yellow-400" /></span>
                        </div>
                        <div className="flex items-center justify-between text-slate-500">
                            <span>Category: Smartphone</span>
                            <span>Price: $999</span>
                        </div>
                        <button className="mt-4 w-full bg-violet-100 px-5 py-2 rounded-md text-violet-500 transition-all hover:bg-violet-500 hover:text-white">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;