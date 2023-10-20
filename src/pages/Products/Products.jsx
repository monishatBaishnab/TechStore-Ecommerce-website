import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard";
import Empty from "../../layouts/Empty/Empty";

const Products = () => {
    const products = useLoaderData();

    const section_name = 'Products';
    const section_title = 'Explore Our Cutting-Edge Tech Products';
    const section_description = 'Discover a curated selection of the latest and greatest in technology, from smartphones to smart gadgets.';
    return (
        <div className="bg-slate-100 dark:bg-slate-800">
            <SectionTitle title={section_title} name={section_name} description={section_description} />
            <div className="c-container">
                {
                    products.length > 0 ?
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {
                                products?.map(product => <ProductCard key={product._id} product={product} />)
                            }
                        </div>
                        :
                        <Empty />
                }
            </div>
        </div>
    );
};

export default Products;