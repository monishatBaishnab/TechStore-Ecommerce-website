import { useEffect, useState } from "react";

const useFetchSliders = (name) => {
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/sliders/${name}`)
            .then(res => res.json())
            .then(data => setSliders(data[0].sliders))
    }, [name])
    return sliders;
};

export default useFetchSliders;