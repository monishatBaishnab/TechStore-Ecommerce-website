import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;