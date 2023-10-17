import SectionTitle from "../../components/SectionTitle";

const Brands = () => {
    const section_name = 'Brands';
    const section_title = 'Explore Leading Tech Brands ';
    const section_description = 'Discover the latest innovations and products from top tech giants like Apple, Samsung, Google, and more.';
    return (
        <section className="bg-slate-100">
            <SectionTitle name={section_name} title={section_title} description={section_description} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    <div onClick={() => console.log('apple')} className="flex flex-col items-center bg-white border border-slate-200 p-5 cursor-pointer transition-all hover:shadow-lg hover:scale-105 rounded">
                        <div className="w-full h-20 overflow-hidden">
                            <img className="w-full h-full object-contain" src="https://i.ibb.co/HXR9jn6/amazon.jpg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-sky-500">Amazon</h3>
                    </div>
                    <div onClick={() => console.log('apple')} className="flex flex-col items-center bg-white border border-slate-200 p-5 cursor-pointer transition-all hover:shadow-lg hover:scale-105 rounded">
                        <div className="w-full h-20 overflow-hidden">
                            <img className="w-full h-full object-contain" src="https://i.ibb.co/xHK13Vf/google.jpg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-sky-500">Google</h3>
                    </div>
                    <div onClick={() => console.log('apple')} className="flex flex-col items-center bg-white border border-slate-200 p-5 cursor-pointer transition-all hover:shadow-lg hover:scale-105 rounded">
                        <div className="w-full h-20 overflow-hidden">
                            <img className="w-full h-full object-contain" src="https://i.ibb.co/KX1GrQX/dell.jpg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-sky-500">Dell</h3>
                    </div>
                    <div onClick={() => console.log('apple')} className="flex flex-col items-center bg-white border border-slate-200 p-5 cursor-pointer transition-all hover:shadow-lg hover:scale-105 rounded">
                        <div className="w-full h-20 overflow-hidden">
                            <img className="w-full h-full object-contain" src="https://i.ibb.co/9c2RdBn/sony.jpg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-sky-500">Sony</h3>
                    </div>
                    <div onClick={() => console.log('apple')} className="flex flex-col items-center bg-white border border-slate-200 p-5 cursor-pointer transition-all hover:shadow-lg hover:scale-105 rounded">
                        <div className="w-full h-20 overflow-hidden">
                            <img className="w-full h-full object-contain" src="https://i.ibb.co/bKpG1Cb/apple.jpg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-sky-500">Apple</h3>
                    </div>
                    <div onClick={() => console.log('apple')} className="flex flex-col items-center bg-white border border-slate-200 p-5 cursor-pointer transition-all hover:shadow-lg hover:scale-105 rounded">
                        <div className="w-full h-20 overflow-hidden">
                            <img className="w-full h-full object-contain" src="https://i.ibb.co/qMCn0gQ/samsung.png" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-sky-500">Samsung</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
