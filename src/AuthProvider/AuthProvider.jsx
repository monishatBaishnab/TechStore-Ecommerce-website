import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const gitProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState(null);

    const regesterWithEmailPass = (email, password) => {
        setUserLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUser = (name, photo) => {
        setUserLoading(true);
        return updateProfile(auth.currentUser, { name, photo });
    }
    const signInWithEmailPass = (email, password) => {
        setUserLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGitHub = () => {
        setUserLoading(true);
        return signInWithPopup(auth, gitProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setUserLoading(false);
        })

        return () => unSubscribe();
    }, [])

    const authInfo = {
        regesterWithEmailPass,
        updateUser,
        signInWithEmailPass,
        signInWithGitHub,
        user,
        userLoading,
        successMessage,
        setSuccessMessage
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;