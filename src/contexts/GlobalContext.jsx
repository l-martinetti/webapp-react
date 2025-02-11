import { createContext, useContext, useEffect } from "react";
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const value = {

    };
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => {
    return useGlobalContext(GlobalContext)
};

export { useGlobalContext, GlobalProvider }