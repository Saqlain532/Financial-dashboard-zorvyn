import React, { createContext, useState, useContext, useEffect } from 'react';

export const AppContext = createContext();
export const AppContextProvider =  ({children})=>{
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState('user');
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode');
            if (saved !== null) {
                return JSON.parse(saved);
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    const value = {
        user, setUser,
        userRole, setUserRole,
        isDarkMode, toggleDarkMode
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}
