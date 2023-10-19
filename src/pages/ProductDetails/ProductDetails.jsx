import { AiFillStar } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import Toast from "../../components/Tost";

const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, image, name, brand_name, type, price, description, rating } = product;

    const handleAddToCart = () => {
        const cartProduct  = {productId: _id, image, name, price, rating};
        console.log(cartProduct);
        fetch('http://localhost:5000/cartProducts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Toast.fire({
                    icon: 'success',
                    title: 'Successfully added cart.'
                })
            }
        })
    }

    return (
        <section>
            <PageTitle page={'Product Details'} name={name} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1">
                        <div className="p-5 bg-slate-100 rounded-md flex items-center justify-center">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-medium mb-3">{name}</h3>
                        <div>
                            <span className="text-slate-500 block">Rating: <span className="inline-flex items-center gap-1 bg-yellow-100 px-2 rounded-md text-slate-900">{rating} <AiFillStar className="text-yellow-400" /></span></span>
                            <span className="text-slate-500 block mt-2">Special Price: <span className="text-lg font-medium text-violet-500">${price}</span></span>
                        </div>
                        <h4 className="text-xl font-medium text-cyan-500 mt-5">Product Details</h4>
                        <table className="w-full mt-3">
                            <tbody>
                                <tr className="w-full">
                                    <td className="border p-2 w-[100px] font-medium text-slate-900">Brand:</td>
                                    <td className="border p-2 text-slate-500">{brand_name}</td>
                                </tr>
                                <tr className="w-full">
                                    <td className="border p-2 w-[100px] font-medium text-slate-900">Type:</td>
                                    <td className="border p-2 text-slate-500">{type}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4 className="text-xl font-medium text-cyan-500 mt-5">Description</h4>
                        <p className="mt-3 text-slate-500">{description}</p>
                        <div className="mt-5 flex items-center gap-3">
                            <button onClick={handleAddToCart} className="px-4 py-2 bg-cyan-500 rounded transition-all hover:bg-cyan-500/90 text-white">Add to Cart</button>
                            <Link to='/cart' className="px-4 py-2 bg-cyan-100 rounded text-cyan-500 transition-all hover:text-white hover:bg-cyan-500">Go to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;