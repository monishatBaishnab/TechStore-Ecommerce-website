import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {
    const { _id, image, name, type, price, rating } = product || {};
    return (
        <div  data-aos="fade-up" className="bg-white p-5 rounded-lg shadow-sm transition-all flex flex-col justify-between hover:shadow-md hover:scale-[1.02]">
            <div className="flex w-full justify-center bg-slate-100 rounded-md">
                <div className="w-40 h-60 overflow-hidden rounded-md">
                    <img className="w-full h-full object-contain" src={image} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <h3 className="text-slate-900 text-xl font-medium">{name}</h3>
                <span className="flex items-center gap-1 bg-yellow-100 px-2 rounded-md text-slate-900">{rating} <AiFillStar className="text-yellow-400" /></span>
            </div>
            <div className="text-slate-500 my-2">
                <span className="block">Category: <span className="text-cyan-500">{type}</span></span>
                <span className="block">Price: <span className="text-cyan-500">${price}</span></span>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Link to={`/productDetails/${_id}`} className="mt-4 w-full bg-cyan-100 px-5 py-2 text-center rounded-md text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white">Details</Link>
                <Link to={`/updateProduct/${_id}`} className="mt-4 w-full bg-cyan-100 px-5 py-2 text-center rounded-md text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white">Update</Link>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
}

export default ProductCard;