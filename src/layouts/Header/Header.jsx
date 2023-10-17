
const Header = () => {
    return (
        <section className="min-h-[500px] bg-hero bg-cover bg-no-repeat bg-left">
            <div className="bg-violet-500/60 min-h-[500px]">
                <div className="c-container">
                    <div className="flex items-center min-h-[500px]">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="text-white col-span-2">
                                <h4 className="text-2xl">TechStore: </h4>
                                <h1 className="text-3xl md:text-5xl font-medium md:leading-[55px] my-5">Unleash the Power of Innovation with the Latest in Tech and Electronics</h1>
                                <p className="text-violet-300">Explore the Latest in Tech and Electronics – Expert Reviews, How-Tos, and Cutting-Edge Updates. Stay Informed, Stay Ahead!</p>
                                <button className="bg-violet-500 border border-violet-600 px-5 py-2 rounded-md mt-8">Sing Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;