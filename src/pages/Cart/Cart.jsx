import { useLoaderData, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { AiOutlineEye } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";

const Cart = () => {
    const products = useLoaderData();
    const navigate = useNavigate();
    return (
        <section>
            <PageTitle page={'Cart Products'} name={'Cart'} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                    {
                        products?.map(product =>
                            <div key={product._id} className="grid gap-5 grid-cols-3">
                                <div className="col-span-1 w-full h-36 overflow-hidden rounded-md bg-slate-100  p-5">
                                    <img className="w-full h-full object-contain" src={product.image} alt="" />
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-xl font-medium text-cyan-500">{product.name}</h3>
                                    <p className="text-slate-500 block mt-1">Price<span className="text-cyan-500"> {product.price}</span></p>
                                    <p className="text-slate-500 block mt-1">Rating<span className="text-cyan-500"> {product.rating}</span></p>
                                    <div className="inline-flex items-center gap-2 mt-2">
                                        <button className="w-full bg-red-100 p-2 text-xl rounded text-red-500"><BsTrash3 /></button>
                                        <button onClick={() => navigate(`/productDetails/${product.productId}`)} className="w-full bg-cyan-100 p-2 text-xl rounded text-cyan-500"><AiOutlineEye /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Cart;