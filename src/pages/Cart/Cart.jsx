import PageTitle from "../../components/PageTitle";
import CartCard from "../../components/CartCard";
import { useLoaderData } from "react-router-dom";
import Empty from "../../layouts/Empty/Empty";
import { useState } from "react";

const Cart = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);
    return (
        <section className="dark:bg-slate-800">
            <PageTitle page={'Cart Products'} name={'Cart'} />
            <div className="c-container">
                {
                    products.length > 0 ?
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            {
                                products?.map(product => <CartCard products={products} setProducts={setProducts} key={product._id} product={product} />)
                            }
                        </div>
                        :
                        <Empty />
                }
            </div>
        </section>
    );
};

export default Cart;