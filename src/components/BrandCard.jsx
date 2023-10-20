import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { name, image } = brand || {};
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={() => navigate(`/products/brand/${name}`)} className="flex flex-col items-center bg-white border border-slate-200 p-5 cursor-pointer transition-all hover:shadow-lg hover:scale-105 rounded dark:bg-slate-700 dark:border-slate-500">
                <div className="w-full h-20 overflow-hidden rounded-md px-5 dark:bg-slate-500">
                    <img className="w-full h-full object-contain" src={image} alt={name} />
                </div>
                <h3 className="text-xl font-medium text-sky-500">{name}</h3>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
}

export default BrandCard;