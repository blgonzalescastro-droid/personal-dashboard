import { createContext, useState } from "react";

export const UserContext = createContext(null);

const userObject = {
    name: 'Beatriz Gonzales',
    email: 'blgonzalescastr@gmail.com',
    avatar: '../src/assets/profile.jfif',
    role: 'Admin'
};


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(userObject);

    const value = {
        user,
        setUser
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
