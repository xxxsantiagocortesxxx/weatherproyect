import { createContext } from "react";

export const PrincipalContex = createContext();


export const MyContextProvider =(props)=>{


    return(
        <PrincipalContex.Provider
        value={1}>
            {props.children}
        </PrincipalContex.Provider>
    );
}