"use client"

import { PropsWithChildren, createContext } from "react";
import React from "react";

type userContextType = {
    user: any;
    setUser: (user: object | null) => void;
} 

const initialState = {
    user: null,
    setUser: () => null,
}


const userContext = createContext<userContextType>(initialState);



const UserProvider = ({ children }: PropsWithChildren) => {

    const [user, setUser] = React.useState({});

    return (
        <userContext.Provider value={{user, setUser}}>
            { children }
        </userContext.Provider>
    )
}

const useUserContext = () => React.useContext(userContext);

export { UserProvider, useUserContext };
export default userContext;