import SectionTitle from "../../components/SectionTitle";
import { AiFillStar } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs'

const Products = () => {
    const section_name = 'Products';
    const section_title = 'Explore Our Cutting-Edge Tech Products';
    const section_description = 'Discover a curated selection of the latest and greatest in technology, from smartphones to smart gadgets.';
    return (
        <div className="bg-slate-100">
            <SectionTitle title={section_title} name={section_name} description={section_description} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm transition-all hover:shadow-md">
                        <div className="flex w-full justify-center bg-slate-100 rounded-md">
                            <div className="w-40 h-60 overflow-hidden rounded-md">
                                <img className="w-full h-full object-contain" src="https://i.ibb.co/25GJvQ7/Alienware-Area-51m.png" alt="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <h3 className="text-slate-900 text-xl font-medium">iPhone 13 Pro</h3>
                            <span className="flex items-center gap-1 bg-yellow-100 px-2 rounded-md text-slate-900">4.8 <AiFillStar className="text-yellow-400" /></span>
                        </div>
                        <div className="text-slate-500 my-2">
                            <span className="block">Category: <span className="text-cyan-500">Smartphone</span></span>
                            <span className="block">Price: <span className="text-cyan-500">$999</span></span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="mt-4 w-full bg-cyan-100 px-5 py-2 rounded-md text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white">Details</button>
                            <button className="mt-4 w-full bg-cyan-100 px-5 py-2 rounded-md text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;