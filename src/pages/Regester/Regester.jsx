import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { BsArrowLeft } from "react-icons/bs";

const Regester = () => {
    return (
        <div className="bg-slate-100 min-h-screen p-10">
            <div className='max-w-md mx-auto'>
                <div className="bg-white p-10 relative">
                    <h4 className="text-2xl text-center mb-5 font-medium">Create User</h4>
                    <p className="text-center text-c-dark mb-2">Process of registering and configuring user access in digital platforms.</p>
                    <form >
                        <Input name='name' label='Name' type='text' placeholder='Enter full name' />
                        <Input name='email' label='Email' type='email' placeholder='Enter email' />
                        <Input name='photo' label='Photo URL' type='text' placeholder='Enter Profile Photo URL' />
                        <Input name='password' label='Password' type='password' placeholder='Enter Password' />
                        <Input name='cpassword' label='Confirm Password' type='password' placeholder='Enter Confirm Password' />
                        <button className="w-full mt-4 text-white bg-violet-500 transition-all px-4 py-2 rounded-md hover:bg-violet-500/90">Regester</button>
                    </form>
                    <p className="mt-3 text-c-dark">If you have an account yet, Please <Link to='/login' className="text-violet-500">Log in.</Link></p>
                    <Link to='/' className="absolute top-5 left-5 p-2 bg-slate-100 rounded-md cursor-pointer">
                        <span className="text-2xl text-c-black"><BsArrowLeft /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Regester;