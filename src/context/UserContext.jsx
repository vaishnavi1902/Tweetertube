import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export  const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    _id: '',
    username: '',
    email: '',
    fullName: '',
    avatar: '',
    coverImage: '',
    watchHistory: [],
    createdAt: '',
  });

  useEffect(() => {
    const getuser = async () => {
      const { data } = await axios.get('/api/v1/users/current-user');
      if (data.error) {
        toast.error(data.error);
      } else {
        // localStorage.setItem('user', JSON.stringify(data.data));
        setUser({
          _id: data.data._id,
          username : data.data.username,
          fullName: data.data.fullName,
          email: data.data.email,
          coverImage: data.data.coverImage,
          avatar: data.data.avatar,
          watchHistory: data.data.watchHistory,
          createdAt : data.data.createdAt
        });
      }
    };
    getuser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}