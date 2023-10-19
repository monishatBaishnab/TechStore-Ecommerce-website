import { useEffect, useState } from "react";

const useFetchSliders = (name) => {
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        fetch(`https://tech-store-server-bma33retc-monishats-projects.vercel.app/sliders/${name}`)
            .then(res => res.json())
            .then(data => setSliders(data[0].sliders))
    }, [name])
    return sliders;
};

export default useFetchSliders;