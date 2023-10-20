import { useEffect, useState } from "react";

const useFetchBrands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://tech-store-server-pink.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return brands;
};

export default useFetchBrands;