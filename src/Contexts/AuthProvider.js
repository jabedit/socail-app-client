import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import { useState } from 'react';
import { useEffect } from 'react';

import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)
 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin =()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
       
    }

    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSingUp = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }
    const updateUserProfile =(profile) =>{
        return updateProfile(auth.currentUser , profile)
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        githubLogin,
        googleLogin,
        user, 
        loading,
        createUser, 
        userSingUp, 
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;