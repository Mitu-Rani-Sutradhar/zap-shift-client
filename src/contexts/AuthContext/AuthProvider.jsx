import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return auth.signOut();
    }


    const updateUserProfile = (profile) =>{
        return updateProfile (auth.currentUser,profile);
    }

// observe user auth state change
 useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
         setUser(currentUser);
         setLoading(false);
     });

     return () => {
         unsubscribe();
     };
 }, [])




 const authInfo ={
     user,
     loading,
     registerUser,
     signInUser,
     signInGoogle,
        logOut,
        updateUserProfile
 }



    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;