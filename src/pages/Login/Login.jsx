import { BsArrowLeft } from "react-icons/bs";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-slate-100 min-h-screen p-10">
            <div className='max-w-md mx-auto'>
                <div className="bg-white p-10 relative">
                    <h4 className="text-2xl text-center mb-5 font-medium">Secure Login</h4>
                    <p className="text-center text-c-dark mb-2">Access your account with confidence. Welcome back to our platform.</p>
                    <form>
                        <Input name='email' label='Email' type='email' placeholder='Enter email' />
                        <Input name='password' label='Password' type='password' placeholder='Enter Password' />
                        <button className="w-full mt-4 text-white bg-violet-500 transition-all px-4 py-2 rounded-md hover:bg-violet-500/90">Log in</button>
                    </form>
                    <p className="mt-3 text-c-dark">If you do not have an account yet, <Link to='/regester' className="text-violet-500">Regester.</Link></p>
                    <Link to='/' className="absolute top-5 left-5 p-2 bg-slate-100 rounded-md cursor-pointer">
                        <span className="text-2xl text-c-black"><BsArrowLeft /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;