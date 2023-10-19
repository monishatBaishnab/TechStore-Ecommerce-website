import { AiOutlineEye } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Toast from "./Tost";

const CartCard = ({ product, products, setProducts }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:5000/products/cart/${product._id}`,{
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    const filterProducts = products.filter(fproduct => fproduct._id !== product._id);
                    setProducts(filterProducts);
                    Toast.fire({
                        icon: 'success',
                        title: "Product Deleted"
                    })
                }
            })
    }
    return (
        <div className="grid gap-5 grid-cols-3">
            <div className="col-span-1 w-full h-36 overflow-hidden rounded-md bg-slate-100  p-5">
                <img className="w-full h-full object-contain" src={product.image} alt="" />
            </div>
            <div className="col-span-2">
                <h3 className="text-xl font-medium text-cyan-500">{product.name}</h3>
                <p className="text-slate-500 block mt-1">Price<span className="text-cyan-500"> {product.price}</span></p>
                <p className="text-slate-500 block mt-1">Rating<span className="text-cyan-500"> {product.rating}</span></p>
                <div className="inline-flex items-center gap-2 mt-2">
                    <button onClick={handleDelete} className="w-full bg-red-100 p-2 text-xl rounded text-red-500"><BsTrash3 /></button>
                    <button onClick={() => navigate(`/productDetails/${product.productId}`)} className="w-full bg-cyan-100 p-2 text-xl rounded text-cyan-500"><AiOutlineEye /></button>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.object,
    products: PropTypes.array,
    setProducts: PropTypes.func,
}

export default CartCard;