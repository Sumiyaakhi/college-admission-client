import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleSignIn, facebookSignIn} = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?. from?.pathname || "/" ;

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result)=>{
            const loggedUser =  result.user;
            console.log("user data", loggedUser);
            const savedUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role:"user"}
        })
    }
        const handleFacebookSignIn =  () =>{
            facebookSignIn()
            .then((result) =>{
                setUser(result.user);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    
    
    return (
        <div>
           <div className='divider'></div> 
           <div className='my-4'>
            <button onClick={handleGoogleSignIn} className='flex gap-3 justify-center py-3 px-5 rounded-lg bg-primary text-white'> <FaGoogle></FaGoogle>
           <p>Click for Google login </p>
           </button>
           </div>
           <div >
           <button onClick={handleFacebookSignIn} className='flex gap-3 justify-center py-3 px-4 rounded-lg bg-primary text-white'> <FaFacebook></FaFacebook>
           <p>Click for facebook login </p>
           </button>
          
           </div>
        </div>
    );
};

export default SocialLogin;