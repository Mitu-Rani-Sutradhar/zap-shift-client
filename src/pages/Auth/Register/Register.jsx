import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { registerUser , updateUserProfile} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleRegister = (data) => {
       
        const profileImg = data.photo[0];


        registerUser(data.email, data.password)
            .then(() => {
             

                // store the image and get the photo url
                const formData = new FormData();
                formData.append('image', profileImg);

                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;



                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                //  create user in the database
                    const userInfo = {
                        email: data.email,
                        displayName: data.name,
                        photoURL: photoURL


                    }
                    axiosSecure.post('/users',userInfo).then(res => {
                        if(res.data.insertedId){
                            console.log('user created in the database');
                        }
                    })



                         // update user profile 
                const userProfile = {
                    displayName: data.name,
                    photoURL: photoURL
                }


                
                updateUserProfile(userProfile)
                    .then(() => {
                        console.log('user profile updated');
                        navigate(location.state || '/');
                    })
                    .catch(error => {
                        console.error('profile update error:', error);
                    })



                    })

               

            })

            .catch(error => {
                console.error('registration error:', error);
            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-3xl text-center font-bold py-3">Welcome to Zap Shift</h3>
                <p className='text-center'>Please create an account</p>
                <fieldset className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
                    {errors.name?.type === 'required' && <span className="text-red-500 text-sm">Name is required</span>}

                    {/* photo */}
                    <label className="label">Photo</label>

                    <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />
                    {errors.photo?.type === 'required' && <span className="text-red-500 text-sm">Photo is required</span>}

                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <span className="text-red-500 text-sm">Email is required</span>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
                    })} className="input" placeholder="Password" />

                    {errors.password?.type === 'required' && <span className="text-red-500 text-sm">Password is required</span>}

                    {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Password must be at least 6 characters long</span>}

                    {
                        errors.password?.type === 'pattern' && <span className="text-red-500 text-sm">Password must contain at least one uppercase letter, one lowercase letter, and one number</span>
                    }


                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>

                <p>Already have an account? <Link state={location.state} className='text-blue-400 underline' to="/login">Login</Link> </p>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Register;