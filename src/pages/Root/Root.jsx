import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toast from "../../components/Tost";

const Root = () => {
    const { successMessage } = useContext(AuthContext);

    if (successMessage !== null) {
        Toast.fire({
            icon: 'success',
            title: successMessage
        })
    }
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;