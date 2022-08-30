import React from 'react'
import { createContext, useContext } from "react";

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const values = {
        id: 1,
        name: "Emir",
        city: "Sakarya"
    }

    return(
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
}

// export default UserContext

export const useUser = () => useContext(UserContext)