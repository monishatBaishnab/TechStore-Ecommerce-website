import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-800">
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div>
                        <Link className="flex items-center gap-2" to='/'>
                            <img className="w-auto h-8" src="https://i.ibb.co/3zbgXFQ/tech-Eleclogo.png" alt="TechStore" />
                            <div className="text-2xl font-medium">
                                <span className="text-violet-500">Tech</span>
                                <span className="text-slate-500 dark:text-slate-300">Store</span>
                            </div>
                        </Link>
                        <p className="mt-4 text-slate-500 dark:text-slate-300">At TechStore, we have created a tech enthusiast is paradise, carefully curating a diverse selection of the latest and greatest in the world of technology.</p>
                        <p className="text-slate-500 dark:text-slate-300"> From cutting-edge gadgets to powerful computing solutions, we offer a one-stop destination for all your tech needs.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-slate-900 mb-4 dark:text-white">Pages</h4>
                        <ul>
                            <li><Link className="text-slate-500 dark:text-slate-300 hover:text-violet-500">Home</Link></li>
                            <li><Link className="text-slate-500 dark:text-slate-300 hover:text-violet-500">Products</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-slate-900 mb-4 dark:text-white">Contact</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-300">
                            <li className="flex items-center gap-2"><AiOutlineHome className="text-violet-600 text-xl" />City, State 12345</li>
                            <li className="flex items-center gap-2"><HiOutlineMail className="text-violet-600 text-xl" />support@techstore.com</li>
                            <li className="flex items-center gap-2"><BsTelephone className="text-violet-600 text-xl" /> +1-123-456-7890</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center py-5 border-t dark:border-t-slate-700">
                <p className="text-slate-500 dark:text-slate-300">Copyrigh &copy; 2023 <Link className="text-violet-500" to='/'>TechSore</Link> All rights reserved </p>
            </div>
        </footer>
    );
};

export default Footer;