import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext("");
const googleProvider = new GoogleAuthProvider();

const ContextComponent = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, [user]);

  const context = {
    registerWithEmailPass,
    loginWithEmailPass,
    loginWithGoogle,
    logOut,
    loading,
    setLoading,
    user
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default ContextComponent;
