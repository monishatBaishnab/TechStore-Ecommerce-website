import { useEffect, useState } from "react";

const useFetchFeatureProducts = () => {
    const [featureProducts, setFeaturedProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setFeaturedProducts(data))
    }, [])
    return featureProducts.slice(1, 8);
};

export default useFetchFeatureProducts;