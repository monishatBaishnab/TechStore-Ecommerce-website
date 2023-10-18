import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toast from "../../components/Tost";

const Root = () => {
    const { successMessage, setSuccessMessage } = useContext(AuthContext);
    
    if (successMessage !== null) {
        Toast.fire({
            icon: 'success',
            title: successMessage
        })
    }
    useEffect(() => {
        setTimeout(() => {
            setSuccessMessage(null);
        }, 1000);
    }, [setSuccessMessage])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;