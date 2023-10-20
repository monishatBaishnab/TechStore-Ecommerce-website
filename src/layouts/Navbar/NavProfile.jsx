import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BsArrowRight } from "react-icons/bs";
import Toast from "../../components/Tost";

const NavProfile = () => {
    const [showProfile, setShowProfile] = useState(false);
    const { user, singOutUser, userLoading } = useContext(AuthContext);
    const handleLogout = () => {
        singOutUser()
            .then(() => {

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
        <div>
            <div className={`${user === null && userLoading === false && 'hidden'} relative`}>
                <img onClick={() => setShowProfile(!showProfile)} className="w-10 cursor-pointer rounded-md" src={user?.photoURL} alt="" />
                <div className={`absolute right-0 w-60 transition-all ${showProfile ? 'opacity-100 visible' : 'invisible opacity-0'}`}>
                    <div className="bg-white p-5 border rounded dark:bg-slate-800 dark:border-slate-500">
                        <h5 className="text-violet-500 text-center font-medium">{user?.displayName}</h5>
                        <button onClick={handleLogout} className="w-full flex gap-1 justify-center items-center mt-2 text-slate-500">Log out  <BsArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavProfile;