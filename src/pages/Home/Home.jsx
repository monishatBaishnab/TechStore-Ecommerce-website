import Brands from "../../layouts/Brands/Brands";
import Header from "../../layouts/Header/Header";
import Testimonials from "../../layouts/Testimonials/Testimonials";
import FeatureProducts from "../../layouts/featureProducts/featureProducts";

const Home = () => {
    return (
        <div>
            <Header />
            <Brands />
            <FeatureProducts />
            <Testimonials />
        </div>
    );
};

export default Home;