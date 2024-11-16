import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    }

    const isAuthenticated = () => {
        return user !== null;
    }

    return (
        <AuthContext.Provider value={{login, user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {

    return useContext(AuthContext);

}