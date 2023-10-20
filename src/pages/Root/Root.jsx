import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toast from "../../components/Tost";
import LoadinPage from "../../layouts/LoadinPage/LoadinPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    const { successMessage, setSuccessMessage } = useContext(AuthContext);
    const navigation = useNavigation();
    
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

    useEffect(() => {
        AOS.init();
    }, [])

    

    return (
        <div>
            <Navbar />
            {navigation.state === 'loading' ? <LoadinPage /> : <Outlet />}        
            <Footer />
        </div>
    );
};

export default Root;