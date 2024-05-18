// import axios from 'axios';
import { createContext, useState } from 'react';

export const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
    const [user, setUser] = useState(useState({
        _id:'',
        username: '',
        email: '',
        fullName: '',
        avatar: '',
        coverImage: '',
        watchHistory: [],
    }));

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}