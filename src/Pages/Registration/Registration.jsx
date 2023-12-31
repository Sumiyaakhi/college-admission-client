import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Registration = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const onSubmit = data =>{
        console.log(data.password, data.confirmPassword);
        if(data.password !== data.confirmPassword){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry! Your Password is not matched',
            })
            return;
        }

        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=> {
                const savedUser = { name: data.name, email: data.email, image: data.photoURL, role:"user"}
            })
        })
    }
    return (
        <>
           < div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary">Registration!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" 
                {...register("name", { required: true })}
                placeholder="email" className="input input-bordered " />
                 {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" 
                {...register("photoURL", { required: true })}
                placeholder="Photo URL" className="input input-bordered " />
                 {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" 
                {...register("email", { required: true })}
                placeholder="email" className="input input-bordered " />
                  {errors.email?.type === 'required' && <p role="alert">email is required</p>}
                  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", { required: true,maxLength:20, minLength:6,pattern:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/ })}
                placeholder="password" className="input input-bordered " />
                {errors.password?.type === 'required' && <p className='text-red-400' role="alert">password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-400' role="alert">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-400' role="alert">Password must have one uppercase, one lowercase, one number and one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className='form-control'>
              <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
            <input  type="password" {...register("confirmPassword", { required: true })}
                placeholder="type password again" className="input input-bordered " />
              </div>
              <div className="form-control mt-6 ">
                
                <input  className="btn text-white bg-primary border-0" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='mx-auto mb-3 underline text-primary'><Link to='/login'>Already have an account?</Link></p>
          </div>
          <SocialLogin></SocialLogin>
        </div>

      </div> 

        </>
    );
};

export default Registration;