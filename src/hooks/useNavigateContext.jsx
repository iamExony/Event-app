import { useContext } from "react";
import { NavigateContext } from "../context/NavigateContext";

export const useNavigateContext = () => {
    const context = useContext(NavigateContext);

    if(!context){
        throw Error("useNavigateContext must be used inside a NavigateContextProvider");
    }

    return context;
}