import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {


const  {register, handleSubmit, formState: { errors }} = useForm();

const {signInUser} = useAuth();

const location = useLocation();
const navigate = useNavigate();
// console.log('login page location:', location);

const handleLogin = (data) =>{
    console.log('after login data:', data);
    signInUser(data.email, data.password)
    .then(result =>{
        console.log(result.user);
        navigate(location.state || '/');
    })
    .catch(error =>{
        console.error('login error:', error);
    });
}


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <h3 className="text-3xl text-center font-bold py-3">Welcome Back</h3>
            <p className='text-center'>Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">

            {/* email field */}
          <label className="label">Email</label>
          <input type="email" {...register('email',
            {required: true}
          )} className="input" placeholder="Email" />
          {errors.email?.type === 'required' && <span className="text-red-500 text-sm">Email is required</span>}
          
          {/* password field */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {
            required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
          })} className="input" placeholder="Password" />


          {errors.password?.type === 'required' && <span className="text-red-500 text-sm">Password is required</span>}

          {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Password must be at least 6 characters</span>}

          {errors.password?.type === 'pattern' && <span className="text-red-500 text-sm">Password must contain at least one lowercase letter, one uppercase letter, and one digit</span>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to Zap shift ?<Link 
        state={location.state}
        
        className='text-blue-400 underline' to="/register">Register</Link> </p>
        <SocialLogin></SocialLogin>
      </form>
      
    </div>
    );
};

export default Login;