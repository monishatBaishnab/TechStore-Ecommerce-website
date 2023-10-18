import { BsArrowLeft } from "react-icons/bs";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toast from "../../components/Tost";
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLine } from "react-icons/ai";

const Login = () => {
    const navigate = useNavigate();
    const { signInWithEmailPass, signInWithGitHub, setSuccessMessage } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInWithEmailPass(email, password)
            .then(() => {
                setSuccessMessage('Login Successful! Welcome back.');
                navigate('/');
            })
            .catch(err => {
                const error = err.message.slice(22, -2);
                Toast.fire({
                    icon: 'error',
                    title: error
                })
            })
    }

    const handleLoginWithGithub = () => {
        signInWithGitHub()
            .then(() => {
                setSuccessMessage('Login Successful! Welcome back.');
                navigate('/')
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
        <div className="bg-slate-100 min-h-screen p-10">
            <div className='max-w-md mx-auto'>
                <div className="bg-white p-10 relative">
                    <h4 className="text-2xl text-center mb-5 font-medium">Secure Login</h4>
                    <p className="text-center text-c-dark mb-2">Access your account with confidence. Welcome back to our platform.</p>
                    <form onSubmit={handleLogin}>
                        <Input name='email' label='Email' type='email' placeholder='Enter email' />
                        <Input name='password' label='Password' type='password' placeholder='Enter Password' />
                        <button className="w-full mt-4 text-white bg-violet-500 transition-all px-4 py-2 rounded-md hover:bg-violet-500/90">Log in</button>
                    </form>
                    <p className="mt-3 text-c-dark">If you do not have an account yet, <Link to='/regester' className="text-violet-500">Regester.</Link></p>
                    <Link to='/' className="absolute top-5 left-5 p-2 bg-slate-100 rounded-md cursor-pointer">
                        <span className="text-2xl text-c-black"><BsArrowLeft /></span>
                    </Link>
                    <div className="flex justify-center mt-3 items-center text-slate-500 ">
                        <span className="text-2xl"><AiOutlineLine /></span>
                        <span className="uppercase">or</span>
                        <span className="text-2xl"><AiOutlineLine /></span>
                    </div>
                    <button onClick={handleLoginWithGithub} className="w-full mt-3 rounded-md px-4 py-2 flex items-center justify-center bg-violet-100 text-violet-500"><span><FiGithub /></span>Login with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Login;