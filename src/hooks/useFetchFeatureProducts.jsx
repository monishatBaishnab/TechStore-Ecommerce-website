import { useEffect, useState } from "react";

const useFetchFeatureProducts = () => {
    const [featureProducts, setFeaturedProducts] = useState([]);
    useEffect(() => {
        fetch('https://tech-store-server-p0qyc2oro-monishats-projects.vercel.app/products')
            .then(res => res.json())
            .then(data => setFeaturedProducts(data))
    }, [])
    return featureProducts.slice(1, 8);
};

export default useFetchFeatureProducts;