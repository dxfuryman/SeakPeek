import React, {useState} from "react";
import {createContext , useContext , useState , useEffect} from "react";
import {IUser} from "@/types";
import {getCurrentUser} from "@/lib/appwrite/api.ts";


export const INITIAL_USER = {
    id: '',
    name: '',
    username:'',
    email:'',
    imageUrl:'',
    bio: ''

};
const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async ()=> false as boolean,

}
const AuthContext = createContext<IContextType>(INITIAL_STATE);
const AuthProvider = ({children} : {children:React.ReactNode}) => {
    const [user, setUser] = useState<IUser>(INITIAL_USER)
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthUser =async () =>{
  try {
    const currentAccount = await getCurrentUser();
    if (currentAccount){
        setUser({
            id: currentAccount.$id,
            name: currentAccount.name,
            username: currentAccount.username,
            email: currentAccount.email,
            imageUrl: currentAccount.imageUrl,
            bio: currentAccount.bio
        })
    }
  } catch (error){
      console.log(error);
      return false;
  }finally {
      setIsLoading(false);
  }
    }

    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser
    }

    return(
        <div>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
        </div>
    )
}