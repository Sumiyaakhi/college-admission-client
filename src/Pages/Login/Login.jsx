import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from 'react';
import SocialLogin from '../../SocialLogin/SocialLogin';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password).then((result) => {
          const user = result.user;
          console.log("logged in user",user);
          Swal.fire({
            icon: "success",
            title: "Login Successful",
          });
          navigate(from, { replace: true });
        });
      };
    return (
        
       <>
        <div className="hero min-h-screen bg-base-200">
            
             
  <div className="hero-content flex-col w-full">
   
  
  <h1 className="text-5xl font-bold text-primary">Login now!</h1>
   
    <div className="card flex-shrink-0 md:w-full max-w-sm shadow-2xl bg-base-100">
        
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered "
                />
                {errors.email?.type === "required" && (
                  <p role="alert">email is required</p>
                )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="type password again"
                  className="input input-bordered "
                />
               
                <p
                  className="text-end m-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEye></FaRegEye>
                  ) : (
                    <FaEyeSlash></FaEyeSlash>
                  )}
                </p>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
        </div>
        <div className="form-control mt-6">
        <input
                  className="btn bg-primary text-white "
                  type="submit"
                  value="Login"
                />
        </div>
        <Link className='text-primary text-center underline' to="/registration">New there? Please Register</Link>
      </form>
    </div>
    <SocialLogin></SocialLogin>
  </div>
</div>
       </>
    );
};

export default Login;