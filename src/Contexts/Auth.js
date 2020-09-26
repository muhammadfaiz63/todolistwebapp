import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { getUser, signIn as sendSignInRequest } from '../Api/Auth';

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(false);
  }, []);

  const signIn = useCallback(async (email, password) => {
    const result = await sendSignInRequest(email, password);
    if (result.isOk) {
      setUser(result.data);
    }

    setLoading(false);
    return result;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("token");
    setUser();
  }, []);


  return (
      <AuthContext.Provider value={{ user, signIn, signOut, loading }} {...props}/>
  );
}

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }
