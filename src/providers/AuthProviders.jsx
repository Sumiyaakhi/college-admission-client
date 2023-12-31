import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
  

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const facebookSignIn = ()=> {
 setLoading(true);
 return signInWithPopup(auth,facebookProvider)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

        })
        return () =>{
            return unsubscribe();
        }
    },[]);

    const authInfo = {
        user,
        loading,
        signIn,
        createUser,
        googleSignIn,
        facebookSignIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;