import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { getUser, signIn as sendSignInRequest } from '../Api/Auth';

import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../Config/firebase_config";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if(localStorage.token){
  //     setToken(localStorage.token)
  //   }
  // }, []);

  const signIn = useCallback(async (email, password) => {
    //const result = await sendSignInRequest(email, password);
    setLoading(true);

    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    const token = await result.user.getIdToken(true)
    localStorage.setItem('token', token)
    setToken(token)
    setLoading(false);
    setUser(result.user)
    return result;
  }, []);

  const signOut = useCallback(() => {
    firebase.auth().signOut();
    setUser()
    localStorage.removeItem('token')
  }, []);


  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <AuthContext.Provider value={{ firebase, isSignedIn, user,token, signIn, signOut, loading }} {...props}/>
          );
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }
