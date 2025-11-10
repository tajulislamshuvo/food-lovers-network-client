import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sign in with Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
  }

  // sign In user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  // sign out user
  const SignOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  // forget password
  const handleForgetPass = (email) => {
    return sendPasswordResetEmail(auth, email)

  }



  // user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    })

    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    creatUser, user, setUser, loading, setLoading, signInUser, SignOut, signInWithGoogle, handleForgetPass
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;