import { createContext, useState } from "react";

export const NavigateContext = createContext();

export const NavigateContextProvider = ({ children }) => {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    }

    return ( 
        <NavigateContext.Provider value={{page, nextPage, previousPage}}>
            { children }
        </NavigateContext.Provider>
     );
}
