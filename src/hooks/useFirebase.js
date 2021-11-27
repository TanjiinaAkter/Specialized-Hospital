/* eslint-disable prettier/prettier */
import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      }
    });
  }, []);

  return {
    user,
    error,
    signInUsingGoogle,
    signInUsingGithub,
    logout,
  };
};

export default useFirebase;
