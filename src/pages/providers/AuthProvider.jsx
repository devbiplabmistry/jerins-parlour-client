import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(); // createContext() should not have an initial value.

const AuthProvider = ({ children }) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null); // Initialize user as null
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => { // Remove the parameters here, as you're using the auth and provider defined outside the function.
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Do something if the sign-out is successful.
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null); // Set user to null when the user is logged out.
            }
            setLoading(false); // Set loading to false after the state change.
        })

        return () => {
            unsubscribe();
        }
    }, [auth]);

    const authInfo = {
        loading,
        signup,
        login,
        logOut,
        user,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
