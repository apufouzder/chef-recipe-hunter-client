/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Registration = () => {
    const { createUser, updateUserNameAndPhoto } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserNameAndPhoto(result.user, name, photo)
                    .then(() => { 
                        console.log('update user');
                    })
                    .catch(err => { 
                        console.log(err.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
            
    }
    return (
        <div className="my-10">
            <div className="card mx-auto flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className="text-2xl text-center mt-4">Register Now</h1>
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>

                        <div className='text-center'>
                            <button type='submit' className="btn text-xl capitalize btn-warning">Register</button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <div className='flex justify-between'>
                        <button className="btn capitalize border-gray-400 btn-outline hover:bg-transparent hover:text-inherit btn-ghost">
                            <FcGoogle className='mr-1 text-2xl' />
                            With Google</button>
                        <button className="btn capitalize border-gray-400 btn-outline hover:bg-transparent hover:text-inherit btn-ghost">
                            <FaGithub className='mr-1 text-2xl' />
                            With Github</button>
                    </div>

                    <div className='text-center'>
                        <span>Do you have an account? <Link className='btn-link capitalize' to="/login">Login</Link> </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;