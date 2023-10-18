import { Link, NavLink } from "react-router-dom";
import { CiDark } from 'react-icons/ci'
import { FaBarsProgress } from 'react-icons/fa6'
import { BsArrowRight, BsCart } from 'react-icons/bs'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toast from "../../components/Tost";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const {user, singOutUser, setSuccessMessage} = useContext(AuthContext);

    const handleLogout = () => {
        singOutUser()
        .then(() => {
            setSuccessMessage('You have been successfully logged out. Thank you for using our services!');
        })
        .catch(err => {
            const error = err.message.slice(22, -2);
                Toast.fire({
                    icon: 'error',
                    title: error
                })
        })
    }

    return (
        <nav className=" bg-white border-b border-b-slate-200">
            <div className="c-container py-3">
                <div className="flex items-center justify-between">
                    <Link className="flex items-center gap-2" to='/'>
                        <img className="w-auto h-10" src="https://i.ibb.co/3zbgXFQ/tech-Eleclogo.png" alt="TechStore" />
                        <div className="text-3xl font-medium">
                            <span className="text-violet-500">Tech</span>
                            <span className="text-slate-500">Store</span>
                        </div>
                    </Link>

                    <div className={`absolute top-0 bottom-0 right-0 z-50 bg-white border-l border-l-slate-100 transition-all ${open ? 'w-60 opacity-100 visible' : 'w-64 invisible opacity-0'} md:z-auto md:opacity-100 md:visible md:w-auto md:bg-transparent md:border-l-none md:static`}>
                        <div className="flex flex-col justify-between h-full">
                            <ul className="flex gap-4 flex-col items-start p-5 md:p-0 md:items-center md:flex-row">
                                <li className="text-slate-500">
                                    <NavLink onClick={() => setOpen(false)} to='/' className={({ isActive, isPending }) => isActive ? 'text-violet-500' : isPending ? 'text-violet-500' : 'text-slate-500 transition-all hover:text-violet-500'}>Home</NavLink>
                                </li>
                                <li className="text-slate-500">
                                    <NavLink onClick={() => setOpen(false)} to='/products' className={({ isActive, isPending }) => isActive ? 'text-violet-500' : isPending ? 'text-violet-500' : 'text-slate-500 transition-all hover:text-violet-500'}>Products</NavLink>
                                </li>
                                <li className="text-slate-500">
                                    <NavLink onClick={() => setOpen(false)} to='/addProduct' className={({ isActive, isPending }) => isActive ? 'text-violet-500' : isPending ? 'text-violet-500' : 'text-slate-500 transition-all hover:text-violet-500'}>AddProducts</NavLink>
                                </li>
                            </ul>
                            <div className="p-5 grid grid-cols-2 gap-2 sm:hidden">
                                <Link to='/regester' className="text-violet-500 w-full bg-violet-100 px-4 py-2 rounded-md">Regester</Link>
                                <span className="bg-violet-500 w-full h-10 flex items-center justify-center rounded-md text-white text-xl cursor-pointer"><CiDark /></span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Link to='/regester' className="text-violet-500 bg-violet-100 px-4 py-2 rounded-md hidden sm:inline-block">Regester</Link>
                        <div className={`${user === null && 'hidden'} relative`}>
                            <img onClick={() => setShowProfile(!showProfile)} className="w-10 cursor-pointer rounded-md" src="https://i.ibb.co/p1mrBLK/fb-prfile.jpg" alt="" />
                            <div className={`absolute right-0 w-60 transition-all ${showProfile ? 'opacity-100 visible' : 'invisible opacity-0'}`}>
                                <div className="bg-white p-5 border rounded">
                                    <h5 className="text-violet-500 text-center font-medium">{user?.displayName}</h5>
                                    <button onClick={handleLogout} className="w-full flex gap-1 justify-center items-center mt-2 text-slate-500">Log out  <BsArrowRight /></button>
                                </div>
                            </div>
                        </div>
                        
                        <button className="bg-violet-500 w-10 h-10  items-center justify-center rounded-md text-white text-xl cursor-pointer flex"><BsCart /></button>
                        <button className="bg-violet-500 w-10 h-10  items-center justify-center rounded-md text-white text-xl cursor-pointer hidden sm:flex"><CiDark /></button> {/*<MdOutlineLightMode /> */}
                        <button onClick={() => setOpen(true)} className="text-white bg-violet-500 w-10 h-10 flex items-center justify-center rounded-md text-xl md:hidden"><FaBarsProgress /></button>
                    </div>
                    <div onClick={() => setOpen(false)} className={`absolute left-0 top-0 right-0 bottom-0 transition-all bg-violet-50/80 z-10 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} md:opacity-0 md:invisible`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;