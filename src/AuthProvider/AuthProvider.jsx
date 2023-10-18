import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadinUser] = useState(true);

    const regesterWithEmailPass = (email, password) => {
        setLoadinUser(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUser = (name, photo) => {
        setLoadinUser(true);
        return updateProfile(auth.currentUser, {name, photo});
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoadinUser(false);
        })

        return () => unSubscribe();
    }, [])

    const authInfo = {
        regesterWithEmailPass,
        updateUser,
        user,
        loadingUser
    }
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;