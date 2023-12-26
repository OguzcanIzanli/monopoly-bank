import { createContext, useContext, useState } from "react";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {

    const [tokenUrl, setTokenUrl] = useState('')
    const [username, setUsername] = useState('')


    const values = {
        tokenUrl,
        setTokenUrl,
        username,
        setUsername
    }

    return (
        <UserProfileContext.Provider value={values}> {children}</UserProfileContext.Provider >
    );
};

export const useUserProfile = () => useContext(UserProfileContext);

