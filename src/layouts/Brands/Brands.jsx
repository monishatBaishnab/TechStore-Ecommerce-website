import BrandCard from "../../components/BrandCard";
import SectionTitle from "../../components/SectionTitle";
import useFetchBrands from "../../hooks/useFetchBrands";

const Brands = () => {
    const section_name = 'Brands';
    const section_title = 'Explore Leading Tech Brands ';
    const section_description = 'Discover the latest innovations and products from top tech giants like Apple, Samsung, Google, and more.';

    const brands = useFetchBrands();

    return (
        <section className="bg-slate-100 dark:bg-slate-600">
            <SectionTitle name={section_name} title={section_title} description={section_description} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {
                        brands.map(brand => <BrandCard key={brand._id} brand={brand} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Brands;
