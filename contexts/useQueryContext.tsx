import { createContext, useState, Dispatch, SetStateAction } from "react";

import { Navbar } from "../ui/Navbar";

interface ValueData {
    query?: string;
    setQuery?: Dispatch<SetStateAction<string>>
}

export const QueryContext = createContext<ValueData>({});

export const QueryContextProvider: React.FC = ({ children }) => {

    const [ query, setQuery ] = useState('');

    return (
        <QueryContext.Provider value={ { query, setQuery} }>
            { children }
        </QueryContext.Provider> 
    )
}