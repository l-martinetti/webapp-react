import { createContext, useContext, useState } from "react";
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const api_url = import.meta.env.VITE_API_URL
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        axios.get(api_url)
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.error('Error: ', err);
            })
    }

    const value = {
        fetchMovies,
        movies
    };
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(GlobalContext)
};

export { useGlobalContext, GlobalProvider }