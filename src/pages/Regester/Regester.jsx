/* eslint-disable no-useless-escape */
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toast from "../../components/Tost";

const Regester = () => {
    const { regesterWithEmailPass, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegester = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        const cpassword = form.get('cpassword');

        if (password.length < 6) {
            Toast.fire('Password Length Too Short');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            Toast.fire({
                icon: 'error',
                title: 'Password Missing Capital Letter.'
            })
            return;
        }
        if (!/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(password)) {
            Toast.fire({
                icon: 'error',
                title: 'Password Missing Special Character.'
            })
            return;
        }
        if (password !== cpassword) {
            Toast.fire({
                icon: 'error',
                title: 'Password and Confirm Password Do Not Match.'
            })
            return;
        }
        console.log(email, password);
        regesterWithEmailPass(email, password)
            .then(() => {
                updateUser(name, photo)
                    .then(() => {
                        console.log("profile Updated");
                        navigate('/');
                    })
                    .catch(err => {
                        const error = err.message.slice(22, -2);
                        Toast.fire({
                            icon: 'error',
                            title: error
                        })
                    })
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
                    <h4 className="text-2xl text-center mb-5 font-medium">Create User</h4>
                    <p className="text-center text-c-dark mb-2">Process of registering and configuring user access in digital platforms.</p>
                    <form onSubmit={handleRegester}>
                        <Input required name='name' label='Name' type='text' placeholder='Enter full name' />
                        <Input required name='email' label='Email' type='email' placeholder='Enter email' />
                        <Input required name='photo' label='Photo URL' type='text' placeholder='Enter Profile Photo URL' />
                        <Input required name='password' label='Password' type='password' placeholder='Enter Password' />
                        <Input required name='cpassword' label='Confirm Password' type='password' placeholder='Enter Confirm Password' />
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