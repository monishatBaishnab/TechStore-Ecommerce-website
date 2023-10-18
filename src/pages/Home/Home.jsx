import { useContext } from "react";
import Brands from "../../layouts/Brands/Brands";
import Header from "../../layouts/Header/Header";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Header />
            <Brands />
        </div>
    );
};

export default Home;