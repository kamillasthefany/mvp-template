import React, { useContext, useEffect, useState } from 'react';

export const AuthContext = React.createContext({});
export const UseAuthProvider = () => {
  const [state, setState] = useContext(AuthContext);
  return [state, setState];
};
export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    rehydrated: false,
  });
  const rehydrateStorage = async () => {
    const data = localStorage.getItem('user');
    setState(prev => ({
      ...prev,
      ...(data && JSON.parse(data)),
      rehydrated: true,
    }));
  };
  useEffect(() => {
    rehydrateStorage();
  }, []);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
  }, [state]);
  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
