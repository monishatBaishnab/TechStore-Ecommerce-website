import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBarsProgress } from 'react-icons/fa6'
import { BsCart } from 'react-icons/bs'
import { useContext,useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import NavProfile from "./NavProfile";

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { user, userLoading } = useContext(AuthContext);

    return (
        <nav className=" bg-white border-b border-b-slate-200 dark:bg-slate-800 dark:border-b-slate-500">
            <div className="c-container py-3">
                <div className="flex items-center justify-between">
                    {/* navbar logo */}
                    <Link className="flex items-center gap-2" to='/'>
                        <img className="w-auto h-10" src="https://i.ibb.co/3zbgXFQ/tech-Eleclogo.png" alt="TechStore" />
                        <div className="text-3xl font-medium">
                            <span className="text-violet-500">Tech</span>
                            <span className="text-slate-500 dark:text-slate-300">Store</span>
                        </div>
                    </Link>

                    {/* navbar nav */}
                    <div className={`fixed top-0 bottom-0 right-0 z-50 bg-white border-l border-l-slate-100 transition-all dark:bg-slate-800 dark:border-l-slate-500 ${open ? 'w-60 opacity-100 visible' : 'w-64 invisible opacity-0'} md:border-l-0 md:z-auto md:opacity-100 md:visible md:w-auto md:bg-transparent md:border-l-none md:static`}>

                        <div className="flex flex-col justify-between h-full">
                            {/* navbar ul */}
                            <ul className="flex gap-4 flex-col items-start p-5 md:p-0 md:items-center md:flex-row">
                                <li className="text-slate-500 dark:text-slate-100">
                                    <NavLink onClick={() => setOpen(false)} to='/' className={({ isActive, isPending }) => isActive ? 'text-violet-500' : isPending ? 'text-violet-500' : 'transition-all hover:text-violet-500'}>Home</NavLink>
                                </li>
                                <li className="text-slate-500 dark:text-slate-100">
                                    <NavLink onClick={() => setOpen(false)} to='/products' className={({ isActive, isPending }) => isActive ? 'text-violet-500' : isPending ? 'text-violet-500' : 'transition-all hover:text-violet-500'}>Products</NavLink>
                                </li>
                                {
                                    user !== null &&

                                    <li className="text-slate-500 dark:text-slate-100">
                                        <NavLink onClick={() => setOpen(false)} to='/addProduct' className={({ isActive, isPending }) => isActive ? 'text-violet-500' : isPending ? 'text-violet-500' : 'transition-all hover:text-violet-500'}>AddProducts</NavLink>
                                    </li>
                                }

                            </ul>
                            <div className="p-5 grid grid-cols-2 gap-2 sm:hidden">
                                <Link to='/regester' className={`text-violet-500 w-full bg-violet-100 px-4 py-2 rounded-md ${user !== null || userLoading === true && 'hidden'}`}>Regester</Link>
                                <ThemeSwitcher classList={'sm:hidden w-full flex item-center'} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Link to='/regester' className={`text-violet-500 bg-violet-100 px-4 py-2 hidden rounded-md ${user !== null || userLoading === true ? 'hidden' : 'sm:inline-block'}`}>Regester</Link>
                        <NavProfile />
                        <button onClick={() => navigate('/cart')} className="bg-violet-500 w-10 h-10  items-center justify-center rounded-md text-white text-xl cursor-pointer flex"><BsCart /></button>
                        <ThemeSwitcher classList={'hidden sm:flex'} />
                        <button onClick={() => setOpen(true)} className="text-white bg-violet-500 w-10 h-10 flex items-center justify-center rounded-md text-xl md:hidden"><FaBarsProgress /></button>
                    </div>
                    <div onClick={() => setOpen(false)} className={`fixed left-0 top-0 right-0 bottom-0 transition-all bg-violet-50/80 z-10 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} md:opacity-0 md:invisible`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;