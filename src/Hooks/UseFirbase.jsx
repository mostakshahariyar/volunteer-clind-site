import { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import FirebaseInitialize from '../Pages/Firebase/FirebaseInitialize';

FirebaseInitialize();

const useFirebase = () => {
        const navigate = useNavigate();
        const [user, setUser] = useState({});
        const [isLogin, setIsLogin] = useState(true);
        const auth = getAuth();

        // signin with google button 
        const signInUsingGoogle = () => {
                setIsLogin(true);
                const googleProvider = new GoogleAuthProvider();
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUser(result.user);
                        })
                        .catch((error) => { alert(error.message) })
                        .finally(() => { setIsLogin(false) })
        }

        // sign up user
        const signUpNewUser = (name, email, password) => {
                createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;

                                navigate("/home")
                                // ...
                        })
                        .catch((error) => {
                                // alert(error.message);
                                // ..
                        });
                updateProfile(auth.currentUser, {
                        displayName: { name }
                }).then(() => {
                        // Profile updated!
                        // ...
                }).catch((error) => {
                        // An error occurred
                        // alert(error.message);
                });
        }
        // login user
        const signInUser = (email, password) => {
                signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                navigate("/home")

                        })
                        .catch((error) => {
                                alert(error.message);
                        });
        }


        // observe user state change 
        useEffect(() => {
                onAuthStateChanged(auth, user => {
                        if (user) { setUser(user); }
                        else { setUser({}); }
                        setIsLogin(false);
                })
        }, [auth])

        // logout
        const logOut = () => {
                setIsLogin(true);
                signOut(auth).then(() => {
                        setUser({})
                })
                        .catch((error) => {
                                // An error happened.
                                alert(error.message);
                        })
                        .finally(() => { setIsLogin(false) })

        }


        return {
                user,
                signInUsingGoogle,
                logOut,
                isLogin,
                signUpNewUser,
                signInUser
        }
};

export default useFirebase;