
const BrandSlide = () => {
    return (
        <div className="px-16 bg-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2 space-y-3" id="text">
                    <h4 className="text-xl text-slate-500">new-product</h4>
                    <h2 className="text-violet-500 font-semibold text-3xl">Experience Sonys Latest Innovation</h2>
                    <p className="text-slate-500">Discover the future of entertainment with our cutting-edge product, the Sony [Product Name]. Immerse yourself in stunning visuals and crystal-clear sound.</p>
                    <button>Explore Now</button>
                </div>
                <div className="md:col-span-1" id="image">

                </div>
            </div>
        </div>
    );
};

export default BrandSlide;