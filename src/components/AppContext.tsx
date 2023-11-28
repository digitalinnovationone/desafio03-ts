import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";
import { IUser } from "../services/interfaces/user.interface";

interface IAppContext {
    user: IUser;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setUser: (user: IUser) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    const [ user, setUser ] = useState<IUser>({} as IUser);

    const storage = getAllLocalStorage();

    useEffect(() => {
      if(storage){
        const { login, user } = JSON.parse(storage);
        setIsLoggedIn(login);
        setUser(user);
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, setUser }}>
        { children }
      </AppContext.Provider>
    )
}
